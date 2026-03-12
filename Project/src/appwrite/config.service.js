import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.apwriteUrl)
            .setProject(config.apwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument({
                databaseId: config.apwriteDatabaseID,
                collectionId: config.apwriteCollectionID,
                documentId: slug,
                data: {
                    title: title,
                    content: content,
                    featuredImage: featuredImage,
                    status: status,
                    userId: userId
                },
                read: ["*"],
                write: ["*"]
            });
        } catch (e) {
            console.error(e);
        }

    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument({
                databaseId: config.apwriteDatabaseID,
                collectionId: config.apwriteCollectionID,
                documentId: slug,
                data: {
                    title: title,
                    content: content,
                    featuredImage: featuredImage,
                    status: status
                },
                read: ["*"],
                write: ["*"]
            });
        } catch (e) {
            console.error(e);
        }
    }

    async deletePost(slug) {
        try {
            const result = await this.databases.deleteDocument({
                databaseId: config.apwriteDatabaseID,
                collectionId: config.apwriteCollectionID,
                documentId: slug
            });
            return result ? true : false;
        } catch (e) {
            console.error(e);
        }

    }

    async getPost(slug) {
        try {
            const result = await this.databases.getDocument({
                databaseId: config.apwriteDatabaseID,
                collectionId: config.apwriteCollectionID,
                documentId: slug
            });
            return result;
        } catch (e) {
            console.error(e);

        }
    }

    async getPosts() {
        try {
            const result = await this.databases.listDocuments({
                databaseId: config.apwriteDatabaseID,
                collectionId: config.apwriteCollectionID,
                queries: [Query.equal("status", "active")]
            });
            return result;
        } catch (e) {
            console.error(e);
        }
    }

    // File upload service
    async uploadFile(file) {
        try {
            return await this.storage.createFile({
                bucketId: config.apwriteBucketId,
                fileId: ID.unique(),
                file: file
            });

        } catch (e) {
            console.error(e);

        }
    }

    async deleteFile(fileId) {
        try {
            const result = await this.storage.deleteFile({
                bucketId: config.apwriteBucketId,
                fileId: fileId
            });
            return result ? true : false;
        } catch (e) {
            console.error(e);

        }
    }

    getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview({
                bucketId: config.apwriteBucketId,
                fileId: fileId,
            });

        } catch (e) {
            console.error(e);
        }
    }

}



const service = new Service();

export default service;