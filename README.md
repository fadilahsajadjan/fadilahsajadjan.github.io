# Fadilah Sajad Jan - Portfolio

A responsive portfolio website and companion six-page PDF, designed in deep navy and yellow. It presents BBA Data Science, creative design, business interests, student leadership, internships, selected project contexts, and credentials.

## Preview the website

Open `index.html` in a browser. For a local static preview, open a terminal in this folder and run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. No package installation or build step is required. Google Fonts are optional; system fonts are used when offline. The motion effects follow the visitor's reduced-motion setting.

## Website video showcase

The showcase has no visitor-facing upload control. When Fadilah supplies a video, add the approved H.264 MP4 as `assets/media/portfolio-reel.mp4` to publish it in the player.

## Publish with GitHub Pages

1. Sign into the GitHub account that should own the portfolio repository. Create a repository (for example, `fadilah-portfolio`) and set it to public so GitHub Pages can serve the site. A public repository makes the website files publicly viewable.
2. Upload the contents of this folder directly to the repository root. Do not upload the ZIP as the only file. `index.html` must be at the root, with the `data/` and `assets/` folders beside it.
3. In the repository, open **Settings > Pages** and choose **Deploy from a branch**, select `main` and `/(root)`, then save. GitHub will show the live address on the Pages settings screen after deployment.
4. If using the account's root Pages address, the repository name must be `<github-username>.github.io`; otherwise the live address will include the repository name.

Before publishing:

1. Review the public email, LinkedIn, and GitHub details in `index.html` before publishing.
2. Confirm each role, organization, event, credential, and design count is accurate and public.
3. Add or update the video file if you want a video on the live site.
4. Replace `fadilah-sajad-jan-portfolio.pdf` if you revise the PDF.

## Credentials

The credentials section links to the supplied Credly, GUVI, and Forage verification pages. It also includes the Power BI workshop and Pixels to Purpose participation certificate images supplied for this portfolio. Other user-reported training credentials are listed as supplied.

## Project-data note

The business performance case study uses `data/monthly_business_performance.csv`, a synthetic sample created for practice. It is not a real company dataset. Its calculated totals are illustrative only. The project page and PDF explain the calculation and limitations; do not present those numbers as observed business results. Sustainability research is described without methods or findings because no further details were provided.

## Included files

- `index.html` - portfolio website.
- `project.html` - business performance sample analysis.
- `style.css` and `script.js` - styling, motion, navigation, and video preview behavior.
- `fadilah-sajad-jan-portfolio.pdf` - six-page PDF portfolio.
- `assets/media/video-poster.svg` - abstract video-preview artwork.
- `assets/credentials/` - supplied Power BI and Pixels to Purpose certificate images.
- `assets/media/portfolio-reel.mp4` - optional video file path for publishing; add your clip here.
- `data/monthly_business_performance.csv` - synthetic learning-project dataset.
