import config from "../config/config";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.apwriteUrl)
            .setProject(config.apwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const user = await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password,
                name: name,
            });

            if (user) {
                //call another method
                return this.login({ email, password });
            } else {
                return null;
            }
        } catch (e) {
            console.error(e)
        }
    }

    async login({ email, password }) {
        try {
            const result = await this.account.createEmailPasswordSession({
                email: email,
                password: password
            });
            return result ? result : new Error("Failed to login");
        } catch (e) {
            console.error(e);
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user ? user : null;
        } catch (e) {
            console.error(e);
        }
    }

    async logout() {
        try {
            const result = await this.account.deleteSessions();
            return result;
        } catch (e) {
            console.error(e);
        }
    }
}


const authService = new AuthService();

export default authService;

