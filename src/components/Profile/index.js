import React from "react";
import { useSelector } from "react-redux";
import "./Profile.scss";
import ReactTimeAgo from "react-time-ago";

export default function Profile() {
    const profile = useSelector((state) => state.profile);
    const user = profile.user;
    const repos = profile.repos;
    const error = profile.error;
    if (user) {
        return (
            <section className="profile">
                    <div className="user-info">
                    <div className="avatar">
                        <div className="avatar-frame">
                            <img
                            className="img"
                            src={user.avatar_url}
                            alt="avatar"
                            />
                        </div>
                        <a
                        className="view-link"
                        href={user.html_url}
                        target="_blank"
                        rel="noreferrer"
                        >
                            View Profile
                        </a>
                    </div>
                    <div className="counts">
                        <div className="repo-count">
                            <label>Repo Count:</label>
                            <span>{user.public_repos}</span>
                        </div>
                        <div className="gist-count">
                            <label>Gist Count:</label>
                            <span>{user.public_gists}</span>
                        </div>
                        <div className="follower-count">
                            <label>Followers:</label>
                            <span>{user.followers}</span>
                        </div>
                        <div className="following-count">
                            <label>Following:</label>
                            <span>{user.following}</span>
                        </div>
                    </div>
                    <ul className="info-list">
                        <li className="list-item">Name: {user.name}</li>
                        <li className="list-item">Username: {user.login}</li>
                        <li className="list-item">Website/Blog: {user.blog}</li>
                        <li className="list-item">Location: {user.location}</li>
                        <li className="list-item">Created At: {user.created_at}</li>
                    </ul>
                </div>
            {
                repos
                ?
                <div className="latest-repos">
                    <h2>Latest Repos</h2>
                    <div className="repos">
                    {
                        Object.values(repos).map(repo => {
                            return (
                            <div className="repo-card" key={repo.id}>
                                <div className="repo-name">
                                    <label>{repo.name}</label>
                                    <a
                                    className="view-link"
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                        View Repo
                                    </a>
                                </div>
                                <div className="last-update">
                                    <span>Updated: <ReactTimeAgo date={repo.updated_at} locale="en-US" /></span>
                                </div>
                                <div className="repo-counts">
                                    <span>Stars: {repo.stargazers_count}</span>
                                    <span>Watchers: {repo.watchers_count}</span>
                                    <span>Stars: {repo.forks_count}</span>
                                </div>
                            </div>
                            )
                        })
                    }
                    </div>
                </div>
                :
                <div className="error">
                    <p>
                        This user has no repo yet...
                    </p>
                </div>
            }
        </section>
        )
    } else if (error) {
        return (
        <div className="error">
            <p>{error}</p>
        </div>
        )
    } else {
        return (
            <div className="info">
                    <p>
                        Please enter a Github username for finding user you're looking for...
                    </p>
            </div>
        )
    }
}