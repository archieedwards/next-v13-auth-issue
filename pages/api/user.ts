import {NextApiRequest, NextApiResponse} from "next";
import {unstable_getServerSession} from "next-auth/next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await unstable_getServerSession()

    console.log({ session })

    if (!session) {
        res.status(401).json({ message: "You must be logged in." });
        return;
    }

    return res.json({
        message: 'Success',
    })
}
