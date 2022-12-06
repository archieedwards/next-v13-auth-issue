import {NextApiRequest, NextApiResponse} from "next";
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "./auth/[...nextauth]";
import {getSession} from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await unstable_getServerSession(req, res, authOptions)

    console.log({ session })

    if (!session) {
        res.status(401).json({ message: "You must be logged in." });
        return;
    }

    return res.json({
        message: 'Success',
    })
}
