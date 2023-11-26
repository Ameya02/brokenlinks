
import { LinkChecker } from "linkinator";

// Controller function to check URL and return links and broken links
const checkURL = async (req, res) => {
    const { url } = req.body;
    try {
        const checker = new LinkChecker();
        const result = await checker.check({path: url, recurse: true});
        
        const links = result.links
        const brokenLinks = links.filter((link) => link.state === 'BROKEN');

        res.json({ links, brokenLinks });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

export default checkURL
