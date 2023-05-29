import fetch from 'node-fetch';
import { Release, RepoInfo } from './types';

const githubApi = {
    getReleases: async (repoInfo: RepoInfo): Promise<Release[]> => {
        try {
            let newReleases = [];
            const lastReleaseDate = repoInfo.lastReleaseDate;
            const releases = await fetch(`https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}/releases?per_page=3`)
                .then(res => res.json());

            if (releases?.length > 0) {
                if (!lastReleaseDate) {
                    //On first run it returns the last release. 
                    newReleases = releases.slice(0, 1);
                } else {
                    //Then returns any new releases.
                    newReleases = releases.filter((release: Release) => new Date(release.published_at) > new Date(lastReleaseDate));
                }
                newReleases = newReleases.map((release: Release) => ({ ...release, owner: repoInfo.owner, repo: repoInfo.repo }));
            }

            if (newReleases.length > 0) {
                //Saves the publish date of the latest release.
                repoInfo.lastReleaseDate = newReleases[0].published_at
            }
            return newReleases;
        } catch (err) {
            throw err;
        }
    }
}

export default githubApi;