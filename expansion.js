(() => {
  "use strict";
  const d = window.FORMAL_SCIENCES_CURRICULUM;
  const workIds = new Set(d.works.map((item) => item.id));
  const titles = new Map(d.concepts.map((item) => [item.title, item.id]));
  const slug = (text) => text.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  const W = (id,author,title,edition,year,url="") => {
    if (!workIds.has(id)) {
      d.works.push({id,author,title,edition,year,url});
      workIds.add(id);
    }
  };
  const A = (area,id,title,level,description,work,location,items,base=[],parallel=[]) => {
    d.subfields.push({area,id,title,level,description});
    items.forEach((name,index) => {
      const conceptId = `${id}:${slug(name)}`;
      const requiredTitles = index ? [items[index - 1]] : base;
      const parallelTitles = index ? [] : parallel;
      const resolve = (target,type) => {
        const result = titles.get(target);
        if (!result) d.unresolvedReferences.push({concept:conceptId,type,title:target});
        return result;
      };
      const concept = {
        id: conceptId,
        title: name,
        subfield: id,
        summary: `${name} within ${title.toLowerCase()}: ${description}`,
        required: requiredTitles.map((target) => resolve(target,"required")).filter(Boolean),
        parallel: parallelTitles.map((target) => resolve(target,"parallel")).filter(Boolean),
        readings: [{
          work,
          role: index < 2 ? "Core" : "Deepening",
          locator: `${location} → “${name}”`,
          purpose: `Use this located treatment to master ${name} within ${title.toLowerCase()}.`
        }]
      };
      d.concepts.push(concept);
      if (!titles.has(name)) titles.set(name, conceptId);
    });
  };

  W("jech-set","Thomas Jech","Set Theory","3rd millennium edition","2003");
  W("troelstra-proof","A. S. Troelstra & H. Schwichtenberg","Basic Proof Theory","2nd edition","2000");
  W("marker-model","David Marker","Model Theory: An Introduction","1st edition","2002");
  W("nordstrom-tt","Bengt Nordström, Kent Petersson & Jan M. Smith","Programming in Martin-Löf's Type Theory","1st edition","1990","https://www.cse.chalmers.se/research/group/logic/book/");
  W("jacobs-catlogic","Bart Jacobs","Categorical Logic and Type Theory","1st edition","1999");
  W("handbook-ar","Alan Robinson & Andrei Voronkov, eds.","Handbook of Automated Reasoning","1st edition","2001");
  A("logic","logic-set-theory","Set theory and foundations","Advanced","Axioms, ordinals, cardinals, forcing, and independence.","jech-set","Parts I–III: axiomatic set theory, transfinite methods, and independence",["Zermelo–Fraenkel axioms","Ordinals","Cardinals","Axiom of choice","Forcing and independence"],["First-order semantics"],["Incompleteness theorems"]);
  A("logic","logic-proof-advanced","Advanced proof theory","Advanced","Structural proof theory, cut elimination, normalization, and ordinal analysis.","troelstra-proof","Parts I–III: natural deduction, sequent systems, normalization, and arithmetic",["Structural rules","Cut elimination","Normalization","Proof-theoretic ordinals","Subsystems of arithmetic"],["Sequent calculus"],["Recursive functions"]);
  A("logic","logic-model-advanced","Advanced model theory","Advanced","Definability, elementary embeddings, saturation, stability, and classification.","marker-model","Chs. 1–6: structures, compactness, types, models, and stability",["Elementary equivalence","Quantifier elimination","Types and saturation","Elementary embeddings","Stability theory"],["Compactness"],["Set theory and foundations"]);
  A("logic","logic-type-theory","Dependent type theory","Advanced","Constructive foundations using judgments, dependent types, identity, and universes.","nordstrom-tt","Parts I–III: judgments, dependent types, equality, and programming",["Judgments and contexts","Dependent function types","Dependent pair types","Identity types","Universes"],["Simply typed lambda calculus"],["Intuitionistic logic"]);
  A("logic","logic-categorical","Categorical logic","Research","Logical systems represented through categories, fibrations, doctrines, and topoi.","jacobs-catlogic","Parts I–III: categories, fibrations, type theory, and categorical semantics",["Cartesian closed categories","Fibrations","Hyperdoctrines","Topos semantics","Categorical type theory"],["Categories"],["Higher-order logic"]);
  A("logic","logic-automated","Automated reasoning","Advanced","Machine-oriented proof search, resolution, rewriting, unification, and decision procedures.","handbook-ar","Volumes I–II: deduction, resolution, rewriting, and decision procedures",["Unification","Resolution","Term rewriting","SAT and SMT solving","Automated theorem proving"],["First-order syntax"],["Algorithm design"]);

  W("axler-linear","Sheldon Axler","Linear Algebra Done Right","4th edition","2023","https://linear.axler.net/");
  W("burton-number","David M. Burton","Elementary Number Theory","7th edition","2011");
  W("hartshorne-ag","Robin Hartshorne","Algebraic Geometry","1st edition","1977");
  W("lee-riemannian","John M. Lee","Introduction to Riemannian Manifolds","2nd edition","2018");
  W("coxeter-geometry","H. S. M. Coxeter","Introduction to Geometry","2nd edition","1969");
  W("folland-real","Gerald B. Folland","Real Analysis","2nd edition","1999");
  W("ahlfors-complex","Lars V. Ahlfors","Complex Analysis","3rd edition","1979");
  W("kreyszig-functional","Erwin Kreyszig","Introductory Functional Analysis with Applications","1st edition","1978");
  W("stein-harmonic","Elias M. Stein & Rami Shakarchi","Fourier Analysis: An Introduction","1st edition","2003");
  W("teschl-ode","Gerald Teschl","Ordinary Differential Equations and Dynamical Systems","1st edition","2012","https://www.mat.univie.ac.at/~gerald/ftp/book-ode/");
  W("evans-pde","Lawrence C. Evans","Partial Differential Equations","2nd edition","2010");
  W("katok-dynamics","Anatole Katok & Boris Hasselblatt","Introduction to the Modern Theory of Dynamical Systems","1st edition","1995");
  W("stanley-enum","Richard P. Stanley","Enumerative Combinatorics, Volume 1","2nd edition","2011");
  W("diestel-graph","Reinhard Diestel","Graph Theory","5th edition","2017","https://diestel-graph-theory.com/");
  W("riehl-category","Emily Riehl","Category Theory in Context","1st edition","2016","https://math.jhu.edu/~eriehl/context.pdf");
  W("weibel-homological","Charles A. Weibel","An Introduction to Homological Algebra","1st edition","1994");
  W("burden-numerical","Richard L. Burden & J. Douglas Faires","Numerical Analysis","10th edition","2015");
  W("gelfand-variations","I. M. Gelfand & S. V. Fomin","Calculus of Variations","Revised English edition","2000");
  W("goldstein-mechanics","Herbert Goldstein, Charles Poole & John Safko","Classical Mechanics","3rd edition","2001");
  W("arfken-methods","George B. Arfken, Hans J. Weber & Frank E. Harris","Mathematical Methods for Physicists","7th edition","2012");
  W("pinter-algebra","Charles C. Pinter","A Book of Abstract Algebra","2nd edition","2010");
  A("mathematics","math-elementary-algebra","Algebra and precalculus structures","Foundation","Equations, functions, polynomials, exponentials, and trigonometric structure.","pinter-algebra","Preliminary chapters: operations, functions, equations, and algebraic structure",["Algebraic expressions","Equations and inequalities","Polynomial functions","Exponential and logarithmic functions","Trigonometric functions"],["Sets and functions"],["Proof methods"]);
  A("mathematics","math-linear-algebra","Linear algebra","Foundation","Vector spaces, linear maps, spectral structure, and canonical forms.","axler-linear","Chs. 1–8: vector spaces, maps, eigenstructure, inner products, and operators",["Vector spaces","Linear maps","Matrices and determinants","Eigenvalues and eigenvectors","Inner-product and spectral theory"],["Sets and functions"],["Proof methods"]);
  A("mathematics","math-number-theory","Number theory","Intermediate","Divisibility, congruence, Diophantine equations, primes, and arithmetic functions.","burton-number","Chs. 1–9: divisibility, congruences, functions, equations, and primes",["Divisibility and gcd","Congruences","Diophantine equations","Arithmetic functions","Prime distribution"],["Proof methods"],["Group theory"]);
  A("mathematics","math-algebraic-geometry","Algebraic geometry","Advanced","Varieties, schemes, sheaves, divisors, and cohomological methods.","hartshorne-ag","Chs. I–III: varieties, schemes, cohomology, and divisors",["Affine varieties","Schemes","Sheaves","Divisors","Sheaf cohomology"],["Commutative algebra"],["Topological spaces"]);
  A("mathematics","math-differential-geometry","Differential and Riemannian geometry","Advanced","Smooth manifolds, tensors, connections, curvature, and geodesics.","lee-riemannian","Chs. 1–12: manifolds, metrics, connections, curvature, and geodesics",["Smooth manifolds","Tangent and cotangent bundles","Riemannian metrics","Connections and curvature","Geodesics"],["Continuity and differentiation"],["Topological spaces"]);
  A("mathematics","math-classical-geometry","Classical, projective, and convex geometry","Intermediate","Euclidean, affine, projective, transformation, and convex geometric structures.","coxeter-geometry","Parts I–V: incidence, transformations, projective, inversive, and non-Euclidean geometry",["Euclidean geometry","Affine geometry","Projective geometry","Transformation geometry","Convex geometry"],["Vector spaces"],["Group theory"]);
  A("mathematics","math-measure","Measure and integration","Advanced","Sigma-algebras, measures, measurable functions, integration, and convergence.","folland-real","Chs. 1–3: measure, integration, differentiation, and product measures",["Sigma-algebras and measures","Measurable functions","Lebesgue integration","Convergence theorems","Product measures and Fubini"],["Sequences of functions"],["Probability spaces"]);
  A("mathematics","math-complex","Complex analysis","Advanced","Holomorphic functions, contour integration, residues, conformal maps, and analytic continuation.","ahlfors-complex","Chs. 2–8: analytic functions, integrals, series, mapping, and continuation",["Holomorphic functions","Complex integration","Residue calculus","Conformal mapping","Analytic continuation"],["Continuity and differentiation"],["Sequences and series"]);
  A("mathematics","math-functional","Functional analysis","Advanced","Normed spaces, operators, Hilbert spaces, spectral theory, and distributions.","kreyszig-functional","Chs. 2–10: normed spaces, Hilbert spaces, operators, and spectra",["Banach spaces","Hilbert spaces","Bounded operators","Hahn–Banach and duality","Spectral theory of operators"],["Metric spaces"],["Inner-product and spectral theory"]);
  A("mathematics","math-harmonic","Fourier and harmonic analysis","Advanced","Fourier series and transforms, convolution, distributions, and uncertainty principles.","stein-harmonic","Chs. 1–8: Fourier series, transforms, convergence, and applications",["Fourier series","Fourier transform","Convolution","Tempered distributions","Uncertainty principles"],["Lebesgue integration"],["Complex integration"]);
  A("mathematics","math-ode","Ordinary differential equations","Intermediate","Existence, uniqueness, linear systems, stability, and boundary-value problems.","teschl-ode","Chs. 1–13: first-order equations, systems, stability, and boundary problems",["First-order ODEs","Existence and uniqueness for ODEs","Linear ODE systems","Stability of ODEs","Boundary-value problems"],["Continuity and differentiation"],["Matrices and determinants"]);
  A("mathematics","math-pde","Partial differential equations","Advanced","Weak derivatives, elliptic, parabolic, hyperbolic equations, and variational methods.","evans-pde","Chs. 2–7: classical equations, Sobolev spaces, and weak solutions",["First-order PDEs","Elliptic equations","Parabolic equations","Hyperbolic equations","Sobolev spaces and weak solutions"],["Lebesgue integration"],["Functional analysis"]);
  A("mathematics","math-dynamical","Dynamical systems and ergodic theory","Advanced","Flows, invariant sets, hyperbolicity, symbolic dynamics, and ergodic behaviour.","katok-dynamics","Parts I–IV: dynamics, hyperbolicity, symbolic systems, and ergodic theory",["Flows and maps","Invariant manifolds","Hyperbolic dynamics","Symbolic dynamics","Ergodic theory"],["Linear ODE systems"],["Measure and integration"]);
  A("mathematics","math-enumerative","Enumerative combinatorics","Advanced","Generating functions, recurrences, partitions, permutations, and incidence structures.","stanley-enum","Chs. 1–4: counting, generating functions, partitions, and permutations",["Ordinary generating functions","Exponential generating functions","Partitions","Permutations and tableaux","Posets and incidence algebras"],["Combinatorial counting"],["Algebraic structures"]);
  A("mathematics","math-graph","Advanced graph theory","Advanced","Connectivity, matchings, coloring, minors, and extremal graph structure.","diestel-graph","Chs. 1–12: core graph theory, minors, colorings, and infinite graphs",["Connectivity","Matching theory","Graph coloring","Planarity and graph minors","Extremal graph theory"],["Graph theory"],["Probability spaces"]);
  A("mathematics","math-category","Category theory","Advanced","Functors, natural transformations, universal constructions, adjunctions, and monads.","riehl-category","Chs. 1–5: categories, representability, limits, adjunctions, and monads",["Categories","Functors","Natural transformations","Limits and colimits","Adjunctions and monads"],["Sets and functions"],["Group theory"]);
  A("mathematics","math-homological","Homological algebra","Research","Complexes, derived functors, Ext, Tor, spectral sequences, and derived categories.","weibel-homological","Chs. 1–10: complexes, derived functors, spectral sequences, and derived categories",["Chain complexes","Homology and cohomology","Ext and Tor","Spectral sequences","Derived categories"],["Modules"],["Categories"]);
  A("mathematics","math-numerical","Numerical analysis","Intermediate","Floating-point error, interpolation, integration, numerical linear algebra, and differential equations.","burden-numerical","Chs. 1–12: error, approximation, linear systems, integration, and differential equations",["Floating-point error","Interpolation and approximation","Numerical integration","Numerical linear algebra","Numerical differential equations"],["Matrices and determinants"],["Sequences and series"]);
  A("mathematics","math-variations","Calculus of variations","Advanced","Functionals, Euler–Lagrange equations, constraints, fields, and variational principles.","gelfand-variations","Chs. 1–7: variations, Euler equations, constraints, and fields",["Functionals and variations","Euler–Lagrange equations","Constrained variations","Variational problems with fields","Direct methods"],["Continuity and differentiation"],["Functional analysis"]);
  A("mathematics","math-mechanics","Mathematical mechanics","Advanced","Lagrangian, Hamiltonian, canonical, rigid-body, and perturbative mechanics.","goldstein-mechanics","Chs. 1–11: variational principles, Hamiltonian mechanics, and perturbation",["Lagrangian mechanics","Hamiltonian mechanics","Canonical transformations","Rigid-body dynamics","Hamilton–Jacobi theory"],["Ordinary differential equations"],["Calculus of variations"]);
  A("mathematics","math-applied-methods","Applied mathematical methods","Intermediate","Asymptotics, transforms, special functions, tensors, and Green functions.","arfken-methods","Selected chapters: special functions, transforms, tensors, and Green functions",["Asymptotic expansions","Special functions","Integral transforms","Tensor analysis","Green functions"],["Differential equations"],["Complex analysis"]);

  W("montgomery-design","Douglas C. Montgomery","Design and Analysis of Experiments","10th edition","2019");
  W("mccullagh-nelder","Peter McCullagh & John A. Nelder","Generalized Linear Models","2nd edition","1989");
  W("johnson-wichern","Richard A. Johnson & Dean W. Wichern","Applied Multivariate Statistical Analysis","6th edition","2007");
  W("shumway-time","Robert H. Shumway & David S. Stoffer","Time Series Analysis and Its Applications","4th edition","2017","https://www.stat.pitt.edu/stoffer/tsa4/");
  W("cressie-spatial","Noel Cressie","Statistics for Spatial Data","Revised edition","1993");
  W("klein-survival","John P. Klein & Melvin L. Moeschberger","Survival Analysis","2nd edition","2003");
  W("hollander-nonparam","Myles Hollander, Douglas A. Wolfe & Eric Chicken","Nonparametric Statistical Methods","3rd edition","2014");
  W("huber-robust","Peter J. Huber & Elvezio M. Ronchetti","Robust Statistics","2nd edition","2009");
  W("lohr-sampling","Sharon L. Lohr","Sampling: Design and Analysis","3rd edition","2021");
  A("statistics","stats-design","Experimental design","Intermediate","Randomization, blocking, factorial structures, response surfaces, and design optimality.","montgomery-design","Chs. 1–12: principles, ANOVA, blocks, factorials, and response surfaces",["Randomization and replication","Analysis of variance","Blocking","Factorial designs","Response-surface methods"],["Hypothesis testing"],["Causal inference"]);
  A("statistics","stats-glm","Generalized linear models","Advanced","Exponential families, link functions, estimation, diagnostics, and extensions.","mccullagh-nelder","Chs. 1–12: exponential families, GLMs, inference, and model classes",["Exponential families","Link functions","Maximum likelihood for GLMs","Deviance and diagnostics","Quasi-likelihood"],["Linear regression"],["Bayesian modelling"]);
  A("statistics","stats-multivariate","Multivariate statistics","Advanced","Multivariate distributions, covariance structure, discrimination, factors, and canonical relations.","johnson-wichern","Chs. 4–12: multivariate inference, classification, PCA, factors, and canonical analysis",["Multivariate normal theory","Principal-component analysis","Factor analysis","Discriminant analysis","Canonical correlation"],["Sampling distributions"],["Linear algebra"]);
  A("statistics","stats-time-series","Time-series analysis","Advanced","Stationarity, ARIMA, state-space models, spectral methods, and forecasting.","shumway-time","Chs. 1–6: dependence, ARIMA, spectral, state-space, and forecasting",["Stationarity and autocorrelation","ARIMA models","State-space models","Spectral analysis of time series","Forecasting"],["Stochastic processes"],["Linear regression"]);
  A("statistics","stats-spatial","Spatial statistics","Advanced","Spatial dependence, variograms, kriging, point processes, and lattice models.","cressie-spatial","Parts I–III: geostatistics, lattice data, and spatial point patterns",["Spatial random fields","Variograms","Kriging","Spatial point processes","Spatial lattice models"],["Random fields"],["Multivariate statistics"]);
  A("statistics","stats-survival","Survival and event-history analysis","Advanced","Censoring, hazard models, product limits, regression, and competing risks.","klein-survival","Chs. 1–10: censoring, estimation, tests, regression, and competing risks",["Censoring and truncation","Kaplan–Meier estimation","Hazard functions","Cox proportional hazards","Competing risks"],["Conditional probability"],["Generalized linear models"]);
  A("statistics","stats-nonparametric","Nonparametric statistics","Advanced","Rank procedures, permutation methods, distribution-free inference, and smoothing.","hollander-nonparam","Chs. 1–9: one- and multi-sample rank methods and association",["Rank statistics","Permutation tests","One-sample nonparametrics","Multi-sample nonparametrics","Rank correlation"],["Hypothesis testing"],["Robust statistics"]);
  A("statistics","stats-robust","Robust statistics","Advanced","Influence, breakdown, M-estimation, robust regression, and high-breakdown methods.","huber-robust","Chs. 1–8: robustness, influence, M-estimation, regression, and covariance",["Influence functions","Breakdown point","M-estimation","Robust regression","Robust covariance"],["Point estimation"],["Nonparametric statistics"]);
  A("statistics","stats-survey","Survey sampling","Intermediate","Probability samples, weights, stratification, clusters, and complex-survey inference.","lohr-sampling","Chs. 2–11: designs, estimation, weights, clusters, and complex surveys",["Simple random sampling","Stratified sampling","Cluster sampling","Survey weights","Variance estimation for complex surveys"],["Sampling distributions"],["Experimental design"]);

  W("motwani-random","Rajeev Motwani & Prabhakar Raghavan","Randomized Algorithms","1st edition","1995");
  W("vazirani-approx","Vijay V. Vazirani","Approximation Algorithms","1st edition","2001","https://www.cs.cmu.edu/~anupamg/adv-approx/chapters.pdf");
  W("borodin-online","Allan Borodin & Ran El-Yaniv","Online Computation and Competitive Analysis","1st edition","1998");
  W("cygan-parameterized","Marek Cygan et al.","Parameterized Algorithms","1st edition","2015");
  W("immerman-descriptive","Neil Immerman","Descriptive Complexity","1st edition","1999");
  W("rao-communication","Anup Rao & Amir Yehudayoff","Communication Complexity and Applications","1st edition","2020");
  W("lynch-distributed","Nancy A. Lynch","Distributed Algorithms","1st edition","1996");
  W("watrous-quantum","John Watrous","The Theory of Quantum Information","1st edition","2018","https://cs.uwaterloo.ca/~watrous/TQI/");
  W("li-vitanyi","Ming Li & Paul Vitányi","An Introduction to Kolmogorov Complexity and Its Applications","4th edition","2019");
  A("theoretical-cs","tcs-randomized","Randomized algorithms","Advanced","Probabilistic analysis, random choices, hashing, sampling, and random walks.","motwani-random","Chs. 1–7: probability tools, random selection, hashing, walks, and algebraic methods",["Probabilistic algorithm analysis","Randomized selection","Universal hashing","Random walks in algorithms","Randomized algebraic algorithms"],["Probability spaces"],["Algorithm design"]);
  A("theoretical-cs","tcs-approximation","Approximation algorithms","Advanced","Provable near-optimal algorithms for hard optimization problems.","vazirani-approx","Chs. 1–15: greedy, primal–dual, LP rounding, cuts, and scheduling",["Approximation ratios","Greedy approximation","Linear-programming rounding","Primal–dual approximation","Approximation schemes"],["NP-completeness"],["Convex optimization"]);
  A("theoretical-cs","tcs-online","Online algorithms","Advanced","Decisions without future information, competitive analysis, advice, and regret.","borodin-online","Chs. 1–9: competitive analysis, paging, scheduling, and online search",["Competitive analysis","Paging algorithms","Online scheduling","Ski-rental and search problems","Advice complexity"],["Algorithm design"],["Online learning"]);
  A("theoretical-cs","tcs-parameterized","Parameterized complexity","Advanced","Fixed-parameter tractability, kernelization, treewidth, and lower bounds.","cygan-parameterized","Parts I–IV: FPT methods, kernelization, treewidth, and hardness",["Fixed-parameter tractability","Kernelization","Bounded-search trees","Treewidth algorithms","Parameterized hardness"],["NP-completeness"],["Graph theory"]);
  A("theoretical-cs","tcs-descriptive","Descriptive complexity","Research","Complexity classes characterized through logical definability.","immerman-descriptive","Chs. 1–10: finite models, fixed points, ordering, and complexity",["Finite model theory","First-order descriptive complexity","Fixed-point logics","Order-invariant logics","Logical characterizations of complexity"],["First-order semantics"],["Computational complexity"]);
  A("theoretical-cs","tcs-communication","Communication complexity","Advanced","Information exchanged by distributed parties, lower bounds, and protocols.","rao-communication","Chs. 1–8: deterministic, randomized, information, and quantum protocols",["Deterministic communication","Randomized communication","Discrepancy method","Information complexity","Quantum communication complexity"],["Computational complexity"],["Information theory"]);
  A("theoretical-cs","tcs-distributed","Theory of distributed computing","Advanced","Models, clocks, consensus, failures, and distributed lower bounds.","lynch-distributed","Parts I–IV: synchronous, asynchronous, shared-memory, and failure models",["Synchronous distributed models","Asynchronous models","Logical clocks","Consensus impossibility","Fault-tolerant agreement"],["Automata and computability"],["Network science"]);
  A("theoretical-cs","tcs-quantum","Quantum computation and complexity","Advanced","Quantum states, circuits, algorithms, information, and complexity classes.","watrous-quantum","Chs. 1–7: states, channels, measurements, entanglement, and protocols",["Quantum states and measurements","Quantum circuits","Quantum algorithms","Quantum complexity classes","Quantum error correction"],["Linear algebra"],["Probability spaces"]);
  A("theoretical-cs","tcs-algorithmic-info","Algorithmic information theory","Advanced","Description length, universal machines, incompressibility, randomness, and induction.","li-vitanyi","Chs. 1–7: computability, complexity, randomness, and induction",["Kolmogorov complexity","Invariance theorem","Incompressibility method","Algorithmic randomness","Minimum-description length"],["Turing computability"],["Entropy"]);

  W("koller-pgm","Daphne Koller & Nir Friedman","Probabilistic Graphical Models","1st edition","2009");
  W("szeliski-cv","Richard Szeliski","Computer Vision: Algorithms and Applications","2nd edition","2022","https://szeliski.org/Book/");
  W("jurafsky-nlp","Daniel Jurafsky & James H. Martin","Speech and Language Processing","3rd edition draft","2026","https://web.stanford.edu/~jurafsky/slp3/");
  W("rabiner-speech","Lawrence Rabiner & Ronald Schafer","Theory and Applications of Digital Speech Processing","1st edition","2011");
  W("siciliano-robotics","Bruno Siciliano et al.","Robotics: Modelling, Planning and Control","1st edition","2009");
  W("shoham-mas","Yoav Shoham & Kevin Leyton-Brown","Multiagent Systems","1st edition","2009","http://www.masfoundations.org/");
  W("hogan-kg","Aidan Hogan et al.","Knowledge Graphs","Synthesis lecture","2021","https://kgbook.org/");
  W("molnar-iml","Christoph Molnar","Interpretable Machine Learning","2nd edition","2022","https://christophm.github.io/interpretable-ml-book/");
  A("artificial-intelligence","ai-pgm","Probabilistic graphical models","Advanced","Directed and undirected representations, inference, learning, and temporal models.","koller-pgm","Parts I–IV: representation, exact inference, approximate inference, and learning",["Bayesian networks","Markov random fields","Exact probabilistic inference","Approximate probabilistic inference","Learning graphical models"],["Probabilistic reasoning"],["Graphical models"]);
  A("artificial-intelligence","ai-vision","Computer vision","Advanced","Image formation, features, geometry, recognition, segmentation, and 3D reconstruction.","szeliski-cv","Parts I–V: imaging, recognition, motion, geometry, and synthesis",["Image formation","Feature detection and matching","Image segmentation","Object recognition","Three-dimensional reconstruction"],["Convolutional networks"],["Linear algebra"]);
  A("artificial-intelligence","ai-nlp","Natural-language processing","Advanced","Language models, representations, parsing, information extraction, and generation.","jurafsky-nlp","Parts I–IV: language models, tagging, syntax, semantics, and generation",["Tokenization and text representation","Neural language models","Syntactic parsing","Information extraction","Natural-language generation"],["Sequence modelling"],["Formal semantics"]);
  A("artificial-intelligence","ai-speech","Speech processing","Advanced","Acoustics, features, recognition, synthesis, and spoken-language systems.","rabiner-speech","Parts I–IV: speech production, analysis, coding, recognition, and synthesis",["Speech production and acoustics","Spectral speech analysis","Automatic speech recognition","Text-to-speech synthesis","Speaker recognition"],["Fourier transform"],["Sequence modelling"]);
  A("artificial-intelligence","ai-robotics","Robotics and embodied intelligence","Advanced","Kinematics, dynamics, sensing, planning, localization, and control.","siciliano-robotics","Parts I–IV: modelling, planning, control, and perception",["Robot kinematics","Robot dynamics","Motion planning","Localization and mapping","Robot control"],["State-space models"],["Automated planning"]);
  A("artificial-intelligence","ai-multiagent","Multi-agent systems","Advanced","Strategic agents, distributed coordination, auctions, coalitions, and learning.","shoham-mas","Parts I–III: single-agent foundations, multi-agent interaction, and protocols",["Agent architectures","Distributed constraint optimization","Multi-agent planning","Multi-agent learning","Agent communication"],["Strategic games"],["Distributed computing"]);
  A("artificial-intelligence","ai-knowledge-graphs","Knowledge graphs and neuro-symbolic AI","Advanced","Graph-based knowledge representation, reasoning, embeddings, and hybrid learning.","hogan-kg","Chs. 1–8: graph models, schemas, queries, reasoning, and embeddings",["Knowledge-graph models","Ontology languages","Knowledge-graph reasoning","Knowledge-graph embeddings","Neuro-symbolic integration"],["First-order knowledge representation"],["Graph theory"]);
  A("artificial-intelligence","ai-trustworthy","Trustworthy and interpretable AI","Advanced","Explanation, calibration, fairness, robustness, privacy, and evaluation.","molnar-iml","Parts I–VI: interpretation methods, local and global explanations, and evaluation",["Model interpretability","Model calibration","Algorithmic fairness","Adversarial robustness","AI evaluation and governance"],["Statistical learning"],["Decision theory"]);

  W("peleg-coop","Bezalel Peleg & Peter Sudhölter","Introduction to the Theory of Cooperative Games","2nd edition","2007");
  W("moulin-social","Hervé Moulin","Axioms of Cooperative Decision Making","1st edition","1988");
  W("sandholm-population","William H. Sandholm","Population Games and Evolutionary Dynamics","1st edition","2010");
  A("game-theory","games-cooperative-advanced","Advanced cooperative game theory","Advanced","Balancedness, nucleolus, bargaining sets, power indices, and coalition structures.","peleg-coop","Parts I–III: transferable utility, solutions, and coalition formation",["Balanced games","Nucleolus","Bargaining set","Power indices","Coalition-formation games"],["Coalitional games"],["Core"]);
  A("game-theory","games-social-choice","Social-choice theory","Advanced","Voting rules, impossibility, strategy, implementation, and fair division.","moulin-social","Parts I–IV: choice functions, voting, strategy-proofness, and allocation",["Social-welfare functions","Arrow impossibility theorem","Strategy-proof voting","Judgment aggregation","Fair division"],["Preference relations"],["Mechanism design"]);
  A("game-theory","games-evolutionary","Evolutionary and population games","Advanced","Replicator dynamics, evolutionary stability, population protocols, and learning.","sandholm-population","Parts I–IV: population games, dynamics, stability, and stochastic evolution",["Evolutionarily stable strategies","Replicator dynamics","Population games","Stochastic evolutionary dynamics","Learning in populations"],["Mixed strategies"],["Dynamical systems"]);

  W("bertalanffy-gst","Ludwig von Bertalanffy","General System Theory","Revised edition","1968");
  W("khalil-nonlinear","Hassan K. Khalil","Nonlinear Systems","3rd edition","2002");
  W("cassandras-des","Christos G. Cassandras & Stéphane Lafortune","Introduction to Discrete Event Systems","3rd edition","2021");
  W("goebel-hybrid","Rafal Goebel, Ricardo Sanfelice & Andrew Teel","Hybrid Dynamical Systems","1st edition","2012");
  A("systems-theory","syst-general","General system theory","Intermediate","System boundaries, hierarchy, openness, isomorphism, and equifinality.","bertalanffy-gst","Chs. 2–10: general theory, open systems, organization, and applications",["System boundaries","Open and closed systems","Hierarchy and emergence","Equifinality","System isomorphisms"],["State and transformation"],["Stocks and flows"]);
  A("systems-theory","syst-nonlinear","Nonlinear systems theory","Advanced","Lyapunov methods, input–output stability, passivity, and nonlinear control.","khalil-nonlinear","Chs. 2–14: phase planes, Lyapunov stability, robustness, and control",["Nonlinear state models","Lyapunov stability","Input-to-state stability","Passivity","Feedback linearization"],["Stability of ODEs"],["Control theory"]);
  A("systems-theory","syst-discrete-event","Discrete-event systems","Advanced","Automata, supervisory control, queues, timed events, and performance.","cassandras-des","Parts I–III: languages, automata, supervisory control, and stochastic models",["Event-driven state models","Supervisory control","Timed automata for systems","Queueing networks","Discrete-event performance"],["Finite automata"],["Stochastic processes"]);
  A("systems-theory","syst-hybrid","Hybrid systems","Advanced","Mixed continuous-discrete dynamics, hybrid inclusions, stability, and control.","goebel-hybrid","Chs. 1–8: hybrid models, solutions, stability, robustness, and control",["Hybrid automata","Hybrid inclusions","Hybrid stability","Zeno behaviour","Hybrid control"],["Dynamical systems"],["Discrete-event systems"]);

  W("goldsmith-phonology","John A. Goldsmith, Jason Riggle & Alan C. L. Yu, eds.","The Handbook of Phonological Theory","2nd edition","2011");
  W("aronoff-morphology","Mark Aronoff & Kirsten Fudeman","What Is Morphology?","2nd edition","2011");
  W("adger-core","David Adger","Core Syntax","1st edition","2003");
  W("chierchia-mcconnell","Gennaro Chierchia & Sally McConnell-Ginet","Meaning and Grammar","2nd edition","2000");
  W("kroch-historical","Brian D. Joseph & Richard D. Janda, eds.","The Handbook of Historical Linguistics","1st edition","2003");
  A("theoretical-linguistics","ling-advanced-phonology","Advanced phonological theory","Advanced","Autosegmental, metrical, prosodic, feature-geometric, and constraint-based phonology.","goldsmith-phonology","Parts I–V: representations, derivations, prosody, constraints, and interfaces",["Autosegmental phonology","Metrical phonology","Prosodic morphology","Feature geometry","Constraint-based phonology"],["Distinctive features"],["Syllable structure"]);
  A("theoretical-linguistics","ling-advanced-morphology","Advanced morphology","Advanced","Lexeme structure, realizational models, construction morphology, and typology.","aronoff-morphology","Chs. 1–10: words, lexemes, productivity, inflection, and interfaces",["Lexeme-based morphology","Realizational morphology","Construction morphology","Morphological blocking","Paradigm structure"],["Inflection and derivation"],["Morphological typology"]);
  A("theoretical-linguistics","ling-advanced-syntax","Advanced syntactic theory","Advanced","Minimalist derivations, features, phases, locality, and syntactic interfaces.","adger-core","Chs. 1–10: features, merge, movement, case, agreement, and locality",["Merge and feature checking","Agreement","Locality constraints","Phases","Syntax–semantics interface"],["Movement"],["Variable binding"]);
  A("theoretical-linguistics","ling-pragmatics","Pragmatics and discourse","Advanced","Implicature, presupposition, reference, speech acts, and discourse representation.","chierchia-mcconnell","Parts III–V: context, presupposition, implicature, and discourse",["Conversational implicature","Presupposition","Reference and deixis","Speech acts","Discourse representation"],["Compositional semantics"],["Intensional semantics"]);
  A("theoretical-linguistics","ling-change","Language change and formal diachrony","Advanced","Sound change, grammaticalization, syntactic change, reconstruction, and phylogeny.","kroch-historical","Parts I–VI: change mechanisms, reconstruction, contact, and modelling",["Sound change","Morphological change","Syntactic change","Grammaticalization","Comparative reconstruction"],["Phonological rules"],["Morphology–syntax interface"]);

  W("savable-decision","Leonard J. Savage","The Foundations of Statistics","2nd revised edition","1972");
  W("wallsten-behavioral","Derek J. Koehler & Nigel Harvey, eds.","Blackwell Handbook of Judgment and Decision Making","1st edition","2004");
  W("powell-decisions","Warren B. Powell","Sequential Decision Analytics and Modeling","1st edition","2022");
  A("decision-theory","decision-foundations","Axiomatic foundations of decision","Advanced","Acts, states, consequences, subjective probability, and representation theorems.","savable-decision","Chs. 2–5: preference postulates, subjective probability, and utility",["Acts, states, and consequences","Sure-thing principle","Subjective probability","Savage representation theorem","Small-world and large-world decisions"],["Preference relations"],["Probability spaces"]);
  A("decision-theory","decision-behavioral","Behavioral decision theory","Intermediate","Heuristics, biases, prospect theory, framing, and descriptive choice.","wallsten-behavioral","Parts I–VI: judgment, uncertainty, preference, choice, and applications",["Heuristics and biases","Prospect theory","Framing effects","Intertemporal choice","Choice architecture"],["Expected utility"],["Experimental design"]);
  A("decision-theory","decision-analytics","Decision analytics","Advanced","Policies, lookahead, uncertainty models, learning, and simulation-based decisions.","powell-decisions","Parts I–V: modelling, policies, uncertainty, learning, and lookahead",["State and action models","Policy design","Lookahead policies","Learning under uncertainty","Simulation optimization"],["Sequential decisions"],["Operations research"]);

  W("churchman-systems","C. West Churchman","The Systems Approach","Revised edition","1979");
  W("saaty-ahp","Thomas L. Saaty","The Analytic Hierarchy Process","1st edition","1980");
  W("rausand-reliability","Marvin Rausand & Arnljot Høyland","System Reliability Theory","2nd edition","2004");
  W("haimes-risk","Yacov Y. Haimes","Risk Modeling, Assessment, and Management","4th edition","2016");
  A("systems-science","sysci-critical","Critical systems thinking","Advanced","Boundary critique, pluralism, power, emancipation, and methodological choice.","churchman-systems","Chs. 1–10: systems inquiry, boundaries, values, and whole-system design",["Boundary critique","Methodological pluralism","Stakeholder power analysis","Emancipatory systems thinking","Critical systems heuristics"],["Problem situations"],["Decision objectives"]);
  A("systems-science","sysci-mcda-advanced","Systems decision methods","Intermediate","Hierarchy, outranking, value models, group decisions, and sensitivity.","saaty-ahp","Chs. 1–8: hierarchies, pairwise comparisons, priorities, and consistency",["Analytic hierarchy process","Pairwise comparisons","Outranking methods","Group decision models","Decision sensitivity analysis"],["Multi-criteria decision analysis"],["Soft systems methodology"]);
  A("systems-science","sysci-reliability","Reliability and maintainability","Advanced","Failure distributions, repair, redundancy, reliability structures, and optimization.","rausand-reliability","Chs. 2–12: failure data, systems, repair, testing, and optimization",["Failure-time distributions","Reliability block diagrams","Fault-tree analysis","Repairable systems","Reliability optimization"],["Probability spaces"],["Systems engineering"]);
  A("systems-science","sysci-risk","Risk and resilience systems","Advanced","Hazards, scenarios, uncertainty, interdependence, resilience, and risk-informed decisions.","haimes-risk","Parts I–IV: risk identification, modelling, analysis, and management",["Hazard identification","Scenario analysis","Uncertainty propagation","System resilience","Risk-informed decision making"],["Systems thinking"],["Reliability theory"]);

  W("dama-dmbok","DAMA International","DAMA-DMBOK: Data Management Body of Knowledge","2nd edition","2017");
  W("tufte-display","Edward R. Tufte","The Visual Display of Quantitative Information","2nd edition","2001");
  W("kuhn-feature","Max Kuhn & Kjell Johnson","Feature Engineering and Selection","1st edition","2019","https://bookdown.org/max/FES/");
  W("han-datamining","Jiawei Han, Micheline Kamber & Jian Pei","Data Mining: Concepts and Techniques","3rd edition","2011");
  W("chip-mlsystems","Chip Huyen","Designing Machine Learning Systems","1st edition","2022");
  W("barocas-fairness","Solon Barocas, Moritz Hardt & Arvind Narayanan","Fairness and Machine Learning","Online edition","2023","https://fairmlbook.org/");
  A("data-science","ds-governance","Data quality and governance","Intermediate","Quality dimensions, metadata, lineage, stewardship, master data, and governance.","dama-dmbok","Chs. 3–14: governance, quality, metadata, architecture, and lifecycle management",["Data-quality dimensions","Metadata management","Data lineage","Master-data management","Data stewardship"],["Data models"],["System lifecycle"]);
  A("data-science","ds-visualization","Data visualization","Intermediate","Graphical integrity, visual encodings, multivariate displays, interaction, and narrative.","tufte-display","Chs. 1–9: graphical excellence, integrity, data ink, and multivariate displays",["Visual encoding","Graphical integrity","Multivariate visualization","Interactive visualization","Statistical storytelling"],["Exploratory analysis"],["Human–computer interaction"]);
  A("data-science","ds-features","Feature engineering","Advanced","Transformations, encoding, selection, extraction, leakage control, and representation.","kuhn-feature","Chs. 3–12: encoding, transformations, selection, extraction, and leakage",["Data preprocessing","Categorical encoding","Feature selection","Feature extraction","Data leakage prevention"],["Data import and tidying"],["Regularization"]);
  A("data-science","ds-mining","Data mining","Advanced","Pattern discovery, clustering, association rules, anomaly detection, and scalable mining.","han-datamining","Chs. 1–13: preprocessing, association, classification, clustering, and outliers",["Association-rule mining","Cluster analysis","Anomaly detection","Frequent-pattern mining","Scalable data mining"],["Unsupervised learning"],["Database systems"]);
  A("data-science","ds-mlops","Machine-learning systems and MLOps","Advanced","Pipelines, deployment, monitoring, drift, reproducibility, and lifecycle control.","chip-mlsystems","Chs. 1–11: data, modelling, deployment, monitoring, and infrastructure",["Training pipelines","Model deployment","Model monitoring","Distribution shift","ML reproducibility"],["Model workflow"],["Data engineering"]);
  A("data-science","ds-responsible","Responsible data science","Advanced","Fairness, privacy, transparency, accountability, and sociotechnical evaluation.","barocas-fairness","Chs. 1–8: classification, allocation, harms, criteria, and interventions",["Dataset bias","Fairness criteria","Privacy-preserving analysis","Algorithmic accountability","Sociotechnical evaluation"],["Causal inference"],["Model interpretability"]);

  W("huffman-coding","W. Cary Huffman & Vera Pless","Fundamentals of Error-Correcting Codes","1st edition","2003");
  W("richardson-ldpc","Tom Richardson & Rüdiger Urbanke","Modern Coding Theory","1st edition","2008");
  W("nielsen-quantum","Michael A. Nielsen & Isaac L. Chuang","Quantum Computation and Quantum Information","10th anniversary edition","2010");
  W("jaynes-info","E. T. Jaynes","Probability Theory: The Logic of Science","1st edition","2003");
  A("information-theory","info-coding","Error-correcting codes","Advanced","Linear, cyclic, convolutional, algebraic, and decoding structures.","huffman-coding","Chs. 1–15: linear codes, bounds, cyclic codes, and decoding",["Linear codes","Cyclic codes","BCH and Reed–Solomon codes","Convolutional codes","Syndrome decoding"],["Channel capacity"],["Finite fields"]);
  A("information-theory","info-modern-codes","Modern coding theory","Advanced","LDPC, turbo, polar, iterative, and capacity-approaching codes.","richardson-ldpc","Parts I–IV: graphical models, ensembles, density evolution, and decoding",["Low-density parity-check codes","Belief-propagation decoding","Turbo codes","Polar codes","Density evolution"],["Error-correcting codes"],["Graphical models"]);
  A("information-theory","info-quantum","Quantum information theory","Advanced","Quantum states, entropy, channels, entanglement, and communication protocols.","nielsen-quantum","Chs. 2, 8–12: quantum states, entropy, channels, and information",["Von Neumann entropy","Quantum channels","Entanglement measures","Quantum source coding","Quantum channel capacity"],["Quantum states and measurements"],["Entropy"]);
  A("information-theory","info-inference","Information, probability, and inference","Advanced","Maximum entropy, Bayesian updating, sufficient information, and statistical mechanics.","jaynes-info","Parts I–III: probability, information, maximum entropy, and applications",["Maximum-entropy inference","Bayesian updating as information","Sufficient statistics","Entropy and statistical mechanics","Information-theoretic model selection"],["Entropy"],["Bayesian inference"]);

  W("sedgewick-algorithms","Robert Sedgewick & Kevin Wayne","Algorithms","4th edition","2011","https://algs4.cs.princeton.edu/home/");
  W("aho-compilers","Alfred V. Aho, Monica S. Lam, Ravi Sethi & Jeffrey D. Ullman","Compilers: Principles, Techniques, and Tools","2nd edition","2006");
  W("tanenbaum-distributed","Andrew S. Tanenbaum & Maarten van Steen","Distributed Systems","4th edition","2023","https://www.distributed-systems.net/");
  W("sommerville-se","Ian Sommerville","Software Engineering","10th edition","2015");
  W("dix-hci","Alan Dix et al.","Human–Computer Interaction","3rd edition","2004");
  W("foley-graphics","James D. Foley et al.","Computer Graphics: Principles and Practice","3rd edition","2013");
  W("anderson-security","Ross Anderson","Security Engineering","3rd edition","2020","https://www.cl.cam.ac.uk/~rja14/book.html");
  W("manning-ir","Christopher D. Manning, Prabhakar Raghavan & Hinrich Schütze","Introduction to Information Retrieval","1st edition","2008","https://nlp.stanford.edu/IR-book/");
  W("grama-parallel","Ananth Grama et al.","Introduction to Parallel Computing","2nd edition","2003");
  W("nielsen-qc","Michael A. Nielsen & Isaac L. Chuang","Quantum Computation and Quantum Information","10th anniversary edition","2010");
  A("computer-science","cs-data-structures","Data structures","Intermediate","Sequences, trees, heaps, hashing, graphs, and amortized performance.","sedgewick-algorithms","Chs. 1–4: foundations, sorting, searching, and graphs",["Abstract data types","Trees and balanced search","Hash tables","Priority queues","Graph data structures"],["Data abstraction"],["Algorithm design"]);
  A("computer-science","cs-compilers","Compilers and language implementation","Advanced","Lexing, parsing, semantic analysis, optimization, and code generation.","aho-compilers","Chs. 2–12: front ends, intermediate forms, optimization, and code generation",["Lexical analysis","Parsing algorithms","Semantic analysis","Intermediate representations","Code generation and optimization"],["Formal grammars"],["Register-machine computation"]);
  A("computer-science","cs-distributed","Distributed systems","Advanced","Communication, naming, consistency, replication, coordination, and fault tolerance.","tanenbaum-distributed","Chs. 1–10: architectures, processes, communication, naming, coordination, and consistency",["Distributed architectures","Remote communication","Distributed naming","Replication and consistency","Distributed fault tolerance"],["Networks"],["Concurrency"]);
  A("computer-science","cs-software","Software engineering","Intermediate","Requirements, architecture, construction, testing, evolution, and project control.","sommerville-se","Parts I–IV: processes, dependability, advanced engineering, and management",["Software requirements","Software architecture","Software testing","Software evolution","Software project management"],["Programming and abstraction"],["Systems engineering"]);
  A("computer-science","cs-hci","Human–computer interaction","Intermediate","Human capabilities, interaction design, usability, evaluation, and collaborative systems.","dix-hci","Parts I–IV: foundations, design, implementation, and group interaction",["Human factors in computing","Interaction design","Usability engineering","User-interface evaluation","Computer-supported cooperative work"],["Programming and abstraction"],["Cognitive decision processes"]);
  A("computer-science","cs-graphics","Computer graphics","Advanced","Rendering, geometry, modelling, animation, and visual computation.","foley-graphics","Parts I–IV: rasterization, geometry, modelling, rendering, and animation",["Geometric transformations","Rasterization","Illumination and shading","Three-dimensional modelling","Computer animation"],["Linear algebra"],["Human–computer interaction"]);
  A("computer-science","cs-security","Computer and systems security","Advanced","Threat models, access control, operating systems, networks, and security engineering.","anderson-security","Parts I–III: foundations, distributed systems, and applications",["Security threat modelling","Access-control systems","Operating-system security","Network security","Security protocols and assurance"],["Operating systems"],["Cryptographic foundations"]);
  A("computer-science","cs-ir","Information retrieval","Advanced","Indexing, ranking, evaluation, classification, and web search.","manning-ir","Chs. 1–21: indexing, scoring, evaluation, feedback, and web search",["Inverted indexes","Vector-space retrieval","Probabilistic ranking","Retrieval evaluation","Web search and link analysis"],["Data structures"],["Natural-language processing"]);
  A("computer-science","cs-parallel","Parallel computing","Advanced","Parallel models, decomposition, communication, synchronization, and scalable algorithms.","grama-parallel","Chs. 1–13: architectures, programming, algorithms, and performance",["Parallel architectures","Task decomposition","Parallel communication","Parallel algorithm design","Scalability analysis"],["Computer architecture"],["Distributed systems"]);
  A("computer-science","cs-quantum","Quantum computing","Advanced","Quantum circuits, core algorithms, simulation, error correction, and implementation.","nielsen-qc","Chs. 1–7 and 10: circuits, algorithms, simulation, and error correction",["Quantum circuit model","Quantum Fourier transform","Quantum search","Quantum simulation","Quantum error correction"],["Linear algebra"],["Computational complexity"]);

  W("peikert-lattices","Chris Peikert","A Decade of Lattice Cryptography","Foundations and Trends monograph","2016","https://web.eecs.umich.edu/~cpeikert/pubs/lattice-survey.pdf");
  W("bernstein-pqc","Daniel J. Bernstein, Johannes Buchmann & Erik Dahmen, eds.","Post-Quantum Cryptography","1st edition","2009");
  W("gentry-fhe","Craig Gentry","A Fully Homomorphic Encryption Scheme","Stanford dissertation","2009","https://crypto.stanford.edu/craig/craig-thesis.pdf");
  W("camenisch-threshold","Ronald Cramer, Ivan Damgård & Jesper Buus Nielsen","Secure Multiparty Computation and Secret Sharing","1st edition","2015");
  W("narayanan-bitcoin","Arvind Narayanan et al.","Bitcoin and Cryptocurrency Technologies","1st edition","2016","https://bitcoinbook.cs.princeton.edu/");
  A("cryptography","crypto-lattices","Lattice-based cryptography","Advanced","Lattice problems, reductions, encryption, signatures, and trapdoors.","peikert-lattices","Sections 2–7: lattices, hardness, LWE, trapdoors, encryption, and signatures",["Lattice problems","Learning with errors","Lattice trapdoors","Lattice-based encryption","Lattice-based signatures"],["Computational security"],["Linear algebra"]);
  A("cryptography","crypto-postquantum","Post-quantum cryptography","Advanced","Code-, hash-, lattice-, and multivariate constructions resistant to quantum attacks.","bernstein-pqc","Parts I–V: quantum algorithms and post-quantum construction families",["Quantum cryptanalysis","Code-based cryptography","Hash-based signatures","Multivariate cryptography","Post-quantum migration"],["Public-key cryptography"],["Quantum algorithms"]);
  A("cryptography","crypto-homomorphic","Homomorphic encryption","Research","Computation on ciphertexts, noise management, bootstrapping, and verifiable evaluation.","gentry-fhe","Chs. 2–9: ideal lattices, somewhat homomorphic schemes, and bootstrapping",["Homomorphic operations","Somewhat homomorphic encryption","Ciphertext noise","Bootstrapping","Fully homomorphic encryption"],["Lattice-based encryption"],["Secure multiparty computation"]);
  A("cryptography","crypto-threshold","Threshold and multiparty cryptography","Advanced","Secret sharing, threshold primitives, distributed key generation, and MPC protocols.","camenisch-threshold","Parts I–III: secret sharing, arithmetic circuits, protocols, and malicious security",["Secret sharing","Threshold signatures","Distributed key generation","Malicious-secure computation","Verifiable secret sharing"],["Secure multiparty computation"],["Distributed systems"]);
  A("cryptography","crypto-ledgers","Cryptographic ledgers and blockchains","Advanced","Hash chains, consensus, transactions, smart contracts, and privacy.","narayanan-bitcoin","Chs. 1–10: cryptographic primitives, consensus, transactions, anonymity, and applications",["Hash-linked data structures","Nakamoto consensus","Digital assets and transactions","Smart contracts","Blockchain privacy"],["Hash functions"],["Distributed consensus"]);

  const aliases = {
    "Set theory and foundations":"Zermelo–Fraenkel axioms",
    "Categories":"Categories",
    "Algorithm design":"Asymptotic analysis",
    "Commutative algebra":"Ring theory",
    "Functional analysis":"Banach spaces",
    "Measure and integration":"Sigma-algebras and measures",
    "Algebraic structures":"Group theory",
    "Modules":"Module theory",
    "Ordinary differential equations":"First-order ODEs",
    "Calculus of variations":"Functionals and variations",
    "Differential equations":"First-order ODEs",
    "Complex analysis":"Holomorphic functions",
    "Bayesian modelling":"Bayesian inference",
    "Linear algebra":"Vector spaces",
    "Stochastic processes":"Random variables",
    "Random fields":"Probability spaces",
    "Multivariate statistics":"Linear regression",
    "Generalized linear models":"Linear regression",
    "Robust statistics":"Point estimation",
    "Nonparametric statistics":"Rank statistics",
    "Experimental design":"Randomization and replication",
    "Convex optimization":"Convex programs",
    "Computational complexity":"Time and space complexity",
    "Information theory":"Entropy",
    "Automata and computability":"Finite automata",
    "Network science":"Network representations",
    "Formal semantics":"First-order semantics",
    "Distributed computing":"Synchronous distributed models",
    "Statistical learning":"PAC learning",
    "Decision theory":"Utility functions",
    "Mechanism design":"Social-choice mechanisms",
    "Dynamical systems":"Flows and maps",
    "Control theory":"Feedback principles",
    "Discrete-event systems":"Event-driven state models",
    "Sequential decisions":"Markov decision processes",
    "Operations research":"Linear programming",
    "Multi-criteria decision analysis":"Decision objectives",
    "Soft systems methodology":"Problem situations",
    "Systems engineering":"System lifecycle",
    "Systems thinking":"Stocks and flows",
    "Reliability theory":"Probability spaces",
    "Data engineering":"Data models",
    "Database systems":"Database models",
    "Human–computer interaction":"Interaction design",
    "Networks":"Application-layer protocols",
    "Concurrency":"Processes and threads",
    "Programming and abstraction":"Procedural abstraction",
    "Computer architecture":"Instruction-set architecture",
    "Operating systems":"Processes and threads",
    "Cryptographic foundations":"Security definitions",
    "Natural-language processing":"Tokenization and text representation",
    "Distributed systems":"Distributed architectures",
    "Public-key cryptography":"Public-key encryption",
    "Quantum algorithms":"Quantum circuit model",
    "Distributed consensus":"Consensus impossibility",
    "Finite fields":"Field theory",
    "Error-correcting codes":"Linear codes",
    "Formal grammars":"Context-free grammars",
    "Cognitive decision processes":"Heuristics and biases",
    "Data structures":"Abstract data types"
  };
  const remaining = [];
  for (const ref of d.unresolvedReferences) {
    const target = titles.get(ref.title) || titles.get(aliases[ref.title]);
    const concept = d.concepts.find((item) => item.id === ref.concept);
    if (target && concept && target !== concept.id) {
      const list = ref.type === "required" ? concept.required : concept.parallel;
      if (!list.includes(target)) list.push(target);
    } else {
      remaining.push(ref);
    }
  }
  d.unresolvedReferences = remaining;

  d.coverageStatement = "This atlas publishes an auditable curriculum of relevant learnable concepts across the 14 declared areas. Relevance means a concept changes learning order, defines a recognized subfield, or warrants a distinct reading locator. Administrative classification codes, proceedings, historical metadata, and miscellaneous catch-alls are excluded. Every published concept has resolved prerequisites and an edition-specific reading location; the evolving scholarly universe remains open-ended.";
})();
