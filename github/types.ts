export type RepoInfo = {
    owner: string,
    repo: string,
    lastReleaseDate?: string,
}

export type Release = {
    author: {
        avatar_url: string,
        login: string,
    },
    body: string,
    name: string,
    owner: string,
    published_at: string,
    repo: string,
    tag_name: string,
    url: string,
}
