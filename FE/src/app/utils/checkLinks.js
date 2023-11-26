"use client"
import {LinkChecker} from 'linkinator';


export async function check(url){
  
  const checker = new LinkChecker();
  const results = await checker.check({ path: url, recurse: true });
  const links = results.links
  const brokenLinks = links.filter((link) => link.status !== 200);
  console.log(`Total links checked: ${links.length}`);
  console.log(`Broken links found: ${brokenLinks.length}`);

  brokenLinks.forEach((link) => {
    console.log(`Broken link: ${link.url}`);
    console.log(`Status code: ${link.status}`);
  } );
  return {brokenLinks:brokenLinks, totalLinks: links.length}};