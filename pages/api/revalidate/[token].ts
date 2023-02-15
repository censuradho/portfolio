import { environments } from "config/environment"
import { paths } from "constants/routes"
import { NextApiRequest, NextApiResponse } from "next"
import { resolvePath } from "utils/helpers"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== environments.revalidate) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    const { slug }  = req.query

    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    slug && await res.revalidate(resolvePath(paths.blog.post, { slug }))
    await res.revalidate(paths.blog.home)

    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}