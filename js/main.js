/* ================================================================
   main.js — Shared JavaScript for the professional website
   ================================================================

   Features implemented here:
   1. BibTeX modal — triggered by any button with data-bibtex attribute
   2. Copy-to-clipboard for the BibTeX modal
   3. Close modal on overlay click or Escape key
   4. "Menu" dropdown for the navbar on narrow screens

   HOW TO ADD A NEW PAPER'S BIBTEX:
   - Scroll to the `bibtexEntries` object below.
   - Add a new key (matching the paper's data-bibtex value in HTML)
   - Add the corresponding BibTeX string as the value.
   ================================================================ */


/* ----------------------------------------------------------------
   BIBTEX ENTRIES
   UPDATE: Add or edit entries here. The key must match the
   data-bibtex="..." attribute on the BibTeX button in HTML.
   ---------------------------------------------------------------- */
const bibtexEntries = {

    /* Every Wrong Answer Counts (2026) */
    everywrong2026: `@article{fei2026every,
  title   = {{Every Wrong Answer Counts: Option-Level Psychometrics for LLM Multiple-Choice Benchmarks}},
  author  = {Fei, Xiao and Zhang, Yang and Almeida Carneiro, Sarah and Vazirgiannis, Michalis},
  journal = {arXiv preprint arXiv:2608.02966},
  year    = {2026}
}`,

    /* The Masked Advantage (2026) */
    maskedadvantage2026: `@article{zhang2026masked,
  title   = {{The Masked Advantage: Uncovering Local-Language Access to Cultural Knowledge in LLMs}},
  author  = {Zhang, Yang and Fei, Xiao and Mohamed, Amr and Almeida Carneiro, Sarah and Konomi, Mersin and Geng, Mingmeng and Asaad, Ahmed and Shang, Guokan and Vazirgiannis, Michalis},
  journal = {arXiv preprint arXiv:2606.07422},
  year    = {2026}
}`,

    /* CARTE (2026) */
    carte2026: `@article{carneiro2026carte,
  title   = {{CARTE: A Benchmark for Mapping Language Model Knowledge Across France}},
  author  = {Almeida Carneiro, Sarah and Xypolopoulos, Christos and Fei, Xiao and Zhang, Yang and Vazirgiannis, Michalis},
  journal = {arXiv preprint arXiv:2606.01995},
  year    = {2026}
}`,

    /* PPI2Text (2026) */
    ppi2text2026: `@article{fei2026ppitext,
  title   = {{PPI2Text: Captioning Protein-Protein Interactions with Coordinate-Aligned Pair-Map Decoding}},
  author  = {Fei, Xiao and Almeida Carneiro, Sarah and Zhang, Yang and Petalidis, Lawrence P. and Tsortos, Achilleas and Bouyioukos, Costas and Vazirgiannis, Michalis},
  journal = {arXiv preprint arXiv:2605.08924},
  year    = {2026}
}`,

    /* Prot2Text-V2 (2025) */
    prot2text2025: `@article{fei2025prottextv,
  title   = {{Prot2Text-V2: Protein Function Prediction with Multimodal Contrastive Alignment}},
  author  = {Fei, Xiao and Chatzianastasis, Michail and Almeida Carneiro, Sarah and Abdine, Hadi and Petalidis, Lawrence P. and Vazirgiannis, Michalis},
  journal = {arXiv preprint arXiv:2505.11194},
  year    = {2025}
}`,

    /* Clustering Dynamics for Improved Speed Prediction Deriving from Topographical GPS Registrations (2024) */
    clustering2024: `@article{carneiro2024clustering,
  title   = {{Clustering Dynamics for Improved Speed Prediction Deriving from Topographical GPS Registrations}},
  author  = {Almeida Carneiro, Sarah and Chierchia, Giovanni and Pirayre, Aurélie and Najman, Laurent},
  journal = {arXiv preprint arXiv:2402.07507},
  year    = {2024}
}`,

    /* Prediction of mobility data with prior on the topography of an infrastructure of a road network (2024) */
    phdthesis2024: `@phdthesis{carneiro2024prediction,
  title  = {{Prediction of mobility data with prior on the topography of an infrastructure of a road network}},
  author = {Almeida Carneiro, Sarah},
  school = {Université Gustave Eiffel},
  year   = {2024}
}`,

    /* SWMLP (2023) */
    swmlp2023: `@inproceedings{carneiro2023swmlp,
  title     = {{SWMLP: Shared Weight Multilayer Perceptron for Car Trajectory Speed Prediction using Road Topographical Features}},
  author    = {Almeida Carneiro, Sarah and Chierchia, Giovanni and Charléty, Jean and Chataignon, Aurélie and Najman, Laurent},
  booktitle = {2023 8th International Conference on Models and Technologies for Intelligent Transportation Systems (MT-ITS)},
  year      = {2023}
}`,

    /* Graph-based supervoxel computation from iterative spanning forest (2021) */
    supervoxel2021: `@inproceedings{jeronimo2021graphbased,
  title     = {{Graph-based supervoxel computation from iterative spanning forest}},
  author    = {Jerônimo, Carolina and Belém, Felipe and Almeida Carneiro, Sarah and Patrocínio Jr, Zenilton K. G. and Najman, Laurent and others},
  booktitle = {International Conference on Discrete Geometry and Mathematical Morphology},
  year      = {2021}
}`,

    /* High-Level Descriptors for Fall Event Detection Supported by a Multi-Stream Network (2021) */
    falldescriptors2021: `@article{carneiro2021highlevel,
  title   = {{High-Level Descriptors for Fall Event Detection Supported by a Multi-Stream Network}},
  author  = {Almeida Carneiro, Sarah and Guimarães, Silvio Jamil Ferzoli and Pedrini, Helio},
  journal = {International Journal of Electrical and Computer Engineering Systems},
  volume  = {12},
  number  = {1},
  year    = {2021}
}`,

    /* Anomalous action detection in videos assisted by high-level features using a multi-stream deep neural network (2020) */
    mscthesis2020: `@mastersthesis{carneiro2020anomalous,
  title  = {{Anomalous action detection in videos assisted by high-level features using a multi-stream deep neural network}},
  author = {Almeida Carneiro, Sarah},
  school = {Universidade Estadual de Campinas},
  year   = {2020}
}`,

    /* Fight detection in video sequences based on multi-stream convolutional neural networks (2019) */
    fight2019: `@inproceedings{carneiro2019fight,
  title     = {{Fight detection in video sequences based on multi-stream convolutional neural networks}},
  author    = {Almeida Carneiro, Sarah and da Silva, Gabriel Pellegrino and Guimarães, Silvio Jamil Ferzoli and Pedrini, Helio},
  booktitle = {2019 32nd SIBGRAPI Conference on Graphics, Patterns and Images (SIBGRAPI)},
  pages     = {8--15},
  year      = {2019}
}`,

    /* Multi-stream deep convolutional network using high-level features applied to fall detection in video sequences (2019) */
    fallssip2019: `@inproceedings{carneiro2019multistream,
  title     = {{Multi-stream deep convolutional network using high-level features applied to fall detection in video sequences}},
  author    = {Almeida Carneiro, Sarah and da Silva, Gabriel Pellegrino and Leite, Guilherme Vieira and Moreno, Ricardo and Guimarães, Silvio Jamil Ferzoli and Pedrini, Helio},
  booktitle = {2019 International Conference on Systems, Signals and Image Processing (IWSSIP)},
  year      = {2019}
}`,

    /* Deep Convolutional Multi-Stream Network Detection System Applied to Fall Identification in Video Sequences (2019) */
    fallmldm2019: `@inproceedings{carneiro2019deep,
  title     = {{Deep Convolutional Multi-Stream Network Detection System Applied to Fall Identification in Video Sequences}},
  author    = {Almeida Carneiro, Sarah and da Silva, Gabriel Pellegrino and Leite, Guilherme Vieira and Moreno, Ricardo and Guimarães, Silvio Jamil Ferzoli and Pedrini, Helio},
  booktitle = {International Conference on Machine Learning and Data Mining in Pattern Recognition (MLDM)},
  pages     = {681--695},
  year      = {2019}
}`,

    /* Image Inpainting Based on Local Patch Search Supported by Image Segmentation (2018) */
    inpainting2018: `@inproceedings{carneiro2018image,
  title     = {{Image Inpainting Based on Local Patch Search Supported by Image Segmentation}},
  author    = {Almeida Carneiro, Sarah and Pedrini, Helio and Guimarães, Silvio Jamil Ferzoli},
  booktitle = {Iberoamerican Congress on Pattern Recognition (CIARP)},
  pages     = {419--427},
  year      = {2018}
}`,

};


/* ----------------------------------------------------------------
   MODAL LOGIC
   ---------------------------------------------------------------- */
const overlay  = document.getElementById('bibtex-modal');
const preBlock = document.getElementById('bibtex-content');
const copyBtn  = document.getElementById('btn-copy');

/* Open modal with the right BibTeX text */
function openBibtex(key) {
    const entry = bibtexEntries[key];
    if (!entry || !overlay) return;
    preBlock.textContent = entry;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

/* Close modal */
function closeModal() {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    copyBtn.textContent = 'Copy BibTeX';
}

/* Wire up all BibTeX buttons (data-bibtex="<key>") */
document.querySelectorAll('[data-bibtex]').forEach(btn => {
    btn.addEventListener('click', () => openBibtex(btn.dataset.bibtex));
});

/* Close on overlay background click */
if (overlay) {
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
}

/* Close on Escape key */
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* Copy to clipboard */
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(preBlock.textContent).then(() => {
            copyBtn.textContent = 'Copied!';
            setTimeout(() => { copyBtn.textContent = 'Copy BibTeX'; }, 2000);
        });
    });
}


/* ----------------------------------------------------------------
   MOBILE NAV MENU
   On narrow screens (see style.css section 13) the nav links are
   hidden behind the "Menu" button; this toggles them open/closed.
   ---------------------------------------------------------------- */
const navbar    = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');

function setNavOpen(open) {
    if (!navbar || !navToggle) return;
    navbar.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', open);
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    navToggle.querySelector('i').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

if (navToggle) {
    navToggle.addEventListener('click', () => setNavOpen(!navbar.classList.contains('nav-open')));

    /* Close after picking a link, on outside click, or on Escape */
    navbar.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => setNavOpen(false)));
    document.addEventListener('click', e => { if (!navbar.contains(e.target)) setNavOpen(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setNavOpen(false); });
}
