const config = {
    apwriteUrl: String(import.meta.env.VITE_APPWRITE_UR),
    apwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    apwriteDatabaseID: String(import.meta.env.VITE_APIWRITE_DATABASE_ID),
    apwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    apwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default config;