const config = {
    apwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    apwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    apwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    apwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    apwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    RTE_API_KEY: String(import.meta.env.VITE_TINY_CLOUD_API_KEY),
};

export default config;