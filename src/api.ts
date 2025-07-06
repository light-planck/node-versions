export interface NodeVersion {
  version: string;
  date: string;
  files: string[];
  npm?: string;
  v8: string;
  uv?: string;
  zlib?: string;
  openssl?: string;
  modules?: string;
  lts: boolean | string;
  security?: boolean;
}

export interface VersionInfo {
  lts: string;
  latest: string;
}

export async function getNodeVersions(): Promise<VersionInfo> {
  try {
    const response = await fetch('https://nodejs.org/dist/index.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const versions: NodeVersion[] = await response.json();
    
    if (!versions || versions.length === 0) {
      throw new Error('No version data received');
    }

    const latest = versions[0].version;
    const ltsVersion = versions.find(v => v.lts !== false);
    
    if (!ltsVersion) {
      throw new Error('No LTS version found');
    }

    return {
      lts: ltsVersion.version,
      latest: latest
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch Node.js versions: ${error.message}`);
    }
    throw new Error('Failed to fetch Node.js versions: Unknown error');
  }
}