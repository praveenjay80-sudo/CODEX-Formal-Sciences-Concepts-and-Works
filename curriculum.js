(() => {
  "use strict";

  const areas = [
    ["logic","Logic","Foundational and philosophical","Formal languages, valid inference, proof, semantics, and the limits of formal systems.","#7656c6"],
    ["mathematics","Mathematics","Core formal science","Structures, quantity, space, change, discreteness, and constructive methods.","#3157d5"],
    ["statistics","Statistics","Inference","Probability-based reasoning from finite, noisy, or incomplete observations.","#dc6558"],
    ["theoretical-cs","Theoretical computer science","Theory of computation","Algorithms, formal languages, computability, complexity, semantics, and verification.","#118d82"],
    ["artificial-intelligence","Artificial intelligence","Computational intelligence","Formal models of reasoning, learning, planning, perception, and intelligent action.","#0d9b8b"],
    ["game-theory","Game theory","Strategic interaction","Individual and collective choice when outcomes depend on interacting decision-makers.","#d78925"],
    ["systems-theory","Systems theory","Mathematical systems","States, dynamics, feedback, networks, emergence, and control across classes of systems.","#5f7185"],
    ["theoretical-linguistics","Theoretical linguistics","Formal language science","Formal accounts of sound patterns, word structure, syntax, meaning, and grammatical computation.","#a15689"],
    ["decision-theory","Decision theory","Rational choice","Preferences, utility, uncertainty, evidence, sequential decisions, and value-sensitive choice.","#c67826"],
    ["systems-science","Systems science","Interdisciplinary systems","Methods for analysing, designing, governing, and improving complex sociotechnical systems.","#506a7a"],
    ["data-science","Data science","Data-centred inference","The full formal workflow from data generation and representation to modelling, validation, and communication.","#2779a6"],
    ["information-theory","Information theory","Information and communication","Quantification, representation, compression, transmission, and inference under informational constraints.","#238ba9"],
    ["computer-science","Computer science","Computing systems","The principles and engineered abstractions underlying programs, machines, networks, data, and human interaction.","#257d70"],
    ["cryptography","Cryptography","Secure computation","Mathematical definitions and constructions for confidentiality, integrity, authentication, privacy, and trust.","#9254a3"]
  ].map(([id,title,kind,description,color]) => ({id,title,kind,description,color}));

  const works = [];
  const work = (id, author, title, edition, year, url="") => works.push({id,author,title,edition,year,url});

  work("enderton-logic","Herbert B. Enderton","A Mathematical Introduction to Logic","2nd edition","2001");
  work("open-logic","Open Logic Project","The Open Logic Text","Complete build","2024","https://builds.openlogicproject.org/open-logic-complete.pdf");
  work("boolos-computability","George Boolos, John Burgess & Richard Jeffrey","Computability and Logic","5th edition","2007");
  work("priest-nonclassical","Graham Priest","An Introduction to Non-Classical Logic","2nd edition","2008");
  work("sider-logic","Theodore Sider","Logic for Philosophy","1st edition","2010");
  work("mcs","Eric Lehman, F. Thomson Leighton & Albert R. Meyer","Mathematics for Computer Science","Open textbook","2018","https://courses.csail.mit.edu/6.042/spring18/mcs.pdf");
  work("dummit-foote","David S. Dummit & Richard M. Foote","Abstract Algebra","3rd edition","2004");
  work("rudin-pma","Walter Rudin","Principles of Mathematical Analysis","3rd edition","1976");
  work("munkres-topology","James R. Munkres","Topology","2nd edition","2000");
  work("boyd-convex","Stephen Boyd & Lieven Vandenberghe","Convex Optimization","1st edition","2004","https://web.stanford.edu/~boyd/cvxbook/");
  work("blitzstein-probability","Joseph K. Blitzstein & Jessica Hwang","Introduction to Probability","2nd edition","2019");
  work("casella-berger","George Casella & Roger L. Berger","Statistical Inference","2nd edition","2002");
  work("islp","Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani & Jonathan Taylor","An Introduction to Statistical Learning with Applications in Python","1st edition","2023","https://www.statlearning.com/");
  work("gelman-bda","Andrew Gelman et al.","Bayesian Data Analysis","3rd edition","2013");
  work("wasserman","Larry Wasserman","All of Statistics","1st edition","2004");
  work("sipser","Michael Sipser","Introduction to the Theory of Computation","3rd edition","2012");
  work("arora-barak","Sanjeev Arora & Boaz Barak","Computational Complexity: A Modern Approach","1st edition","2009","https://theory.cs.princeton.edu/complexity/");
  work("clrs","Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest & Clifford Stein","Introduction to Algorithms","4th edition","2022");
  work("baier-katoen","Christel Baier & Joost-Pieter Katoen","Principles of Model Checking","1st edition","2008");
  work("pierce-tapl","Benjamin C. Pierce","Types and Programming Languages","1st edition","2002");
  work("aima","Stuart Russell & Peter Norvig","Artificial Intelligence: A Modern Approach","4th US edition","2021");
  work("shalev-ml","Shai Shalev-Shwartz & Shai Ben-David","Understanding Machine Learning","1st edition","2014","https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/");
  work("goodfellow-dl","Ian Goodfellow, Yoshua Bengio & Aaron Courville","Deep Learning","1st edition","2016","https://www.deeplearningbook.org/");
  work("sutton-barto","Richard S. Sutton & Andrew G. Barto","Reinforcement Learning: An Introduction","2nd edition","2018","http://incompleteideas.net/book/the-book-2nd.html");
  work("poole-mackworth","David Poole & Alan Mackworth","Artificial Intelligence: Foundations of Computational Agents","3rd edition","2023","https://artint.info/3e/html/ArtInt3e.html");
  work("osborne-games","Martin J. Osborne","An Introduction to Game Theory","1st edition","2004");
  work("osborne-rubinstein","Martin J. Osborne & Ariel Rubinstein","A Course in Game Theory","1st edition","1994");
  work("maschler","Michael Maschler, Eilon Solan & Shmuel Zamir","Game Theory","1st edition","2013");
  work("nisan-agt","Noam Nisan et al.","Algorithmic Game Theory","1st edition","2007","https://www.cs.cmu.edu/~sandholm/cs15-892F13/algorithmic-game-theory.pdf");
  work("fudenberg-tirole","Drew Fudenberg & Jean Tirole","Game Theory","1st edition","1991");
  work("ashby-cybernetics","W. Ross Ashby","An Introduction to Cybernetics","1st edition","1956","https://ashby.info/Ashby-Introduction-to-Cybernetics.pdf");
  work("strogatz","Steven H. Strogatz","Nonlinear Dynamics and Chaos","2nd edition","2015");
  work("astrom-murray","Karl J. Åström & Richard M. Murray","Feedback Systems","2nd edition","2021","https://fbswiki.org/wiki/index.php/Feedback_Systems:_An_Introduction_for_Scientists_and_Engineers");
  work("newman-networks","Mark Newman","Networks","2nd edition","2018");
  work("mitchell-complexity","Melanie Mitchell","Complexity: A Guided Tour","1st edition","2009");
  work("hayes-phonology","Bruce Hayes","Introductory Phonology","1st edition","2009");
  work("haspelmath-morphology","Martin Haspelmath & Andrea D. Sims","Understanding Morphology","2nd edition","2010");
  work("carnie-syntax","Andrew Carnie","Syntax: A Generative Introduction","4th edition","2021");
  work("heim-kratzer","Irene Heim & Angelika Kratzer","Semantics in Generative Grammar","1st edition","1998");
  work("jurafsky-martin","Daniel Jurafsky & James H. Martin","Speech and Language Processing","3rd edition draft","2026","https://web.stanford.edu/~jurafsky/slp3/");
  work("fishburn-utility","Peter C. Fishburn","Utility Theory for Decision Making","1st edition","1970");
  work("gilboa-decision","Itzhak Gilboa","Theory of Decision under Uncertainty","1st edition","2009");
  work("berger-decision","James O. Berger","Statistical Decision Theory and Bayesian Analysis","2nd edition","1985");
  work("puterman-mdp","Martin L. Puterman","Markov Decision Processes","1st edition","1994");
  work("keeney-raiffa","Ralph L. Keeney & Howard Raiffa","Decisions with Multiple Objectives","2nd edition","1993");
  work("meadows-systems","Donella H. Meadows","Thinking in Systems","1st edition","2008");
  work("checkland-ssm","Peter Checkland","Systems Thinking, Systems Practice","30-year retrospective edition","1999");
  work("hillier-or","Frederick S. Hillier & Gerald J. Lieberman","Introduction to Operations Research","11th edition","2021");
  work("sterman","John D. Sterman","Business Dynamics","1st edition","2000");
  work("incose","INCOSE","Systems Engineering Handbook","5th edition","2023");
  work("wickham-r4ds","Hadley Wickham, Mine Çetinkaya-Rundel & Garrett Grolemund","R for Data Science","2nd edition","2023","https://r4ds.hadley.nz/");
  work("kleppmann","Martin Kleppmann","Designing Data-Intensive Applications","1st edition","2017");
  work("tukey-eda","John W. Tukey","Exploratory Data Analysis","1st edition","1977");
  work("hastie-esl","Trevor Hastie, Robert Tibshirani & Jerome Friedman","The Elements of Statistical Learning","2nd edition","2009","https://hastie.su.domains/ElemStatLearn/");
  work("hernan-robins","Miguel A. Hernán & James M. Robins","Causal Inference: What If","1st edition","2020","https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/");
  work("cover-thomas","Thomas M. Cover & Joy A. Thomas","Elements of Information Theory","2nd edition","2006");
  work("mackay-info","David J. C. MacKay","Information Theory, Inference, and Learning Algorithms","1st edition","2003","https://www.inference.org.uk/itprnn/book.pdf");
  work("richardson-urbanke","Tom Richardson & Rüdiger Urbanke","Modern Coding Theory","1st edition","2008");
  work("csiszar-korner","Imre Csiszár & János Körner","Information Theory","2nd edition","2011");
  work("elgamal-kim","Abbas El Gamal & Young-Han Kim","Network Information Theory","1st edition","2011");
  work("sicp","Harold Abelson & Gerald Jay Sussman","Structure and Interpretation of Computer Programs","2nd edition","1996","https://web.mit.edu/6.001/6.037/sicp.pdf");
  work("patterson-hennessy","David A. Patterson & John L. Hennessy","Computer Organization and Design RISC-V Edition","2nd edition","2020");
  work("silberschatz-os","Abraham Silberschatz, Peter B. Galvin & Greg Gagne","Operating System Concepts","10th edition","2018");
  work("ramakrishnan-db","Raghu Ramakrishnan & Johannes Gehrke","Database Management Systems","3rd edition","2003");
  work("kurose-ross","James F. Kurose & Keith W. Ross","Computer Networking: A Top-Down Approach","8th edition","2021");
  work("katz-lindell","Jonathan Katz & Yehuda Lindell","Introduction to Modern Cryptography","3rd edition","2020");
  work("boneh-shoup","Dan Boneh & Victor Shoup","A Graduate Course in Applied Cryptography","Version 0.6","2023","https://toc.cryptobook.us/");
  work("goldreich-foc1","Oded Goldreich","Foundations of Cryptography, Volume 1","1st edition","2001");
  work("goldreich-foc2","Oded Goldreich","Foundations of Cryptography, Volume 2","1st edition","2004");
  work("dwork-roth","Cynthia Dwork & Aaron Roth","The Algorithmic Foundations of Differential Privacy","1st edition","2014","https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf");

  const subfieldSpecs = [];
  const S = (area,id,title,level,description,workId,concepts,bases=[],parallels=[]) =>
    subfieldSpecs.push({area,id,title,level,description,workId,concepts,bases,parallels});

  S("logic","logic-core","Sentential and predicate logic","Foundation","Syntax, semantics, deduction, and quantification.", "enderton-logic",[
    ["Formal languages","§1.1–1.2: languages, symbols, expressions, and induction on formulas"],
    ["Propositional semantics","§1.2: truth assignments, tautologies, and logical consequence"],
    ["Deductive calculi","§1.3: a deductive calculus for sentential logic"],
    ["First-order syntax","§2.1: first-order languages and terms"],
    ["First-order semantics","§2.2: structures, satisfaction, and truth"]
  ]);
  S("logic","logic-meta","Proof theory and model theory","Intermediate","Formal proof systems and semantic structures.", "open-logic",[
    ["Natural deduction","Part I, Natural Deduction: rules, derivations, and normalization"],
    ["Sequent calculus","Part I, Sequent Calculus: sequents and structural rules"],
    ["Soundness","Part I, Soundness: induction on derivations"],
    ["Completeness","Part I, Completeness: canonical-model construction"],
    ["Compactness","Part I, Compactness and Löwenheim–Skolem theorems"]
  ],["First-order semantics"],["First-order syntax"]);
  S("logic","logic-computability","Computability and incompleteness","Advanced","Effective procedures, undecidability, and arithmetical limits.", "boolos-computability",[
    ["Recursive functions","Chs. 3–6: enumerability, diagonalization, and recursive functions"],
    ["Turing computability","Chs. 7–8: Turing machines and equivalent formulations"],
    ["Undecidability","Ch. 4 and Ch. 8: undecidable sets and the halting problem"],
    ["Gödel coding","Chs. 15–16: arithmetization of syntax"],
    ["Incompleteness theorems","Chs. 17–18: first and second incompleteness theorems"]
  ],["First-order semantics"],["Deductive calculi"]);
  S("logic","logic-nonclassical","Modal and non-classical logics","Advanced","Alternative consequence relations and intensional modalities.", "priest-nonclassical",[
    ["Modal logic","Part II: normal modal logics and Kripke semantics"],
    ["Intuitionistic logic","Part III: intuitionistic logic and Kripke semantics"],
    ["Many-valued logic","Part IV: many-valued logics"],
    ["Paraconsistent logic","Part V: logics of inconsistency"],
    ["Relevant logic","Part VI: relevance and entailment"]
  ],["Propositional semantics"],["Natural deduction"]);
  S("logic","logic-philosophy","Philosophical logic","Advanced","Formal treatment of modality, identity, existence, and conditionals.", "sider-logic",[
    ["Identity and descriptions","Ch. 4: identity, descriptions, and definite descriptions"],
    ["Quantified modal logic","Chs. 8–9: quantified modal logic and possible worlds"],
    ["Counterfactual conditionals","Ch. 7: conditionals and counterfactual semantics"],
    ["Free logic","Ch. 5: free logic and non-denoting terms"],
    ["Higher-order logic","Ch. 10: second-order and higher-order logic"]
  ],["First-order semantics"],["Modal logic"]);

  S("mathematics","math-discrete","Proof and discrete structures","Foundation","Proof methods, sets, relations, counting, and graphs.", "mcs",[
    ["Proof methods","Part I: proofs, propositions, contradiction, and induction"],
    ["Sets and functions","Part II: sets, functions, relations, and cardinality"],
    ["Combinatorial counting","Part III: sums, products, bijections, and inclusion–exclusion"],
    ["Graph theory","Part II: graphs, trees, connectivity, and coloring"],
    ["Recurrences and generating functions","Part III: recurrences and generating functions"]
  ]);
  S("mathematics","math-algebra","Algebraic structures","Intermediate","Groups, rings, fields, modules, and symmetries.", "dummit-foote",[
    ["Group theory","Part I, Chs. 1–6: groups, quotients, actions, and structure"],
    ["Ring theory","Part II, Chs. 7–9: rings, ideals, polynomial rings, and modules"],
    ["Field theory","Part III, Chs. 13–14: field extensions and Galois theory"],
    ["Module theory","Part II, Chs. 10–12: modules and canonical forms"],
    ["Representation theory","Part VI: representations of finite groups"]
  ],["Sets and functions"],["Combinatorial counting"]);
  S("mathematics","math-analysis","Real and functional analysis","Intermediate","Limits, continuity, measure, integration, and function spaces.", "rudin-pma",[
    ["Metric spaces","Ch. 2: basic topology in metric spaces"],
    ["Sequences and series","Ch. 3: numerical sequences and series"],
    ["Continuity and differentiation","Chs. 4–5: continuity and differentiation"],
    ["Riemann–Stieltjes integration","Ch. 6: integration and fundamental theorems"],
    ["Sequences of functions","Ch. 7: uniform convergence and approximation"]
  ],["Proof methods"],["Group theory"]);
  S("mathematics","math-topology","Topology and geometry","Intermediate","Continuity, topological spaces, manifolds, and algebraic invariants.", "munkres-topology",[
    ["Topological spaces","§§12–16: bases, subbases, product and subspace topologies"],
    ["Connectedness and compactness","§§23–28: connected and compact spaces"],
    ["Separation and countability","§§30–32: countability and separation axioms"],
    ["Fundamental group","§§51–55: homotopy and the fundamental group"],
    ["Covering spaces","§§53–54 and §79: covering spaces and classification"]
  ],["Metric spaces"],["Group theory"]);
  S("mathematics","math-optimization","Optimization and numerical mathematics","Advanced","Convexity, duality, algorithms, and mathematically controlled approximation.", "boyd-convex",[
    ["Convex sets","Ch. 2: convex sets, cones, and generalized inequalities"],
    ["Convex functions","Ch. 3: convex functions and conjugacy"],
    ["Convex programs","Ch. 4: standard convex optimization problems"],
    ["Lagrange duality","Ch. 5: duality, KKT conditions, and sensitivity"],
    ["Interior-point methods","Chs. 9–11: numerical methods and barrier methods"]
  ],["Continuity and differentiation"],["Field theory"]);

  S("statistics","stats-probability","Probability foundations","Foundation","Randomness, conditioning, distributions, expectation, and convergence.", "blitzstein-probability",[
    ["Probability spaces","Ch. 1: sample spaces, events, and probability"],
    ["Conditional probability","Ch. 2: conditioning, Bayes’ rule, and independence"],
    ["Random variables","Chs. 3–4: discrete and continuous random variables"],
    ["Expectation and variance","Chs. 5–6: expectation, moments, and covariance"],
    ["Limit theorems","Chs. 10–11: inequalities, laws of large numbers, and central limits"]
  ],["Combinatorial counting"],["Sequences and series"]);
  S("statistics","stats-inference","Classical statistical inference","Intermediate","Estimation, testing, likelihood, sufficiency, and asymptotics.", "casella-berger",[
    ["Sampling distributions","Chs. 4–5: random samples and data reduction"],
    ["Point estimation","Ch. 7: estimation principles and estimator evaluation"],
    ["Hypothesis testing","Ch. 8: tests, power, and optimality"],
    ["Interval estimation","Ch. 9: confidence sets and pivots"],
    ["Asymptotic inference","Ch. 10: convergence and large-sample theory"]
  ],["Expectation and variance"],["Limit theorems"]);
  S("statistics","stats-models","Regression and statistical learning","Intermediate","Predictive models, regularization, classification, and resampling.", "islp",[
    ["Linear regression","Ch. 3: simple and multiple linear regression"],
    ["Classification","Ch. 4: logistic regression, discriminant analysis, and Bayes classifiers"],
    ["Resampling","Ch. 5: cross-validation and bootstrap"],
    ["Regularization","Ch. 6: model selection, ridge, lasso, and dimension reduction"],
    ["Tree and ensemble methods","Ch. 8: trees, bagging, random forests, and boosting"]
  ],["Point estimation"],["Convex programs"]);
  S("statistics","stats-bayesian","Bayesian modelling","Advanced","Probability models, posterior computation, hierarchical structure, and model checking.", "gelman-bda",[
    ["Bayesian inference","Ch. 1: probability and inference"],
    ["Single-parameter models","Ch. 2: one-parameter probability models"],
    ["Multiparameter models","Ch. 3: multiparameter models"],
    ["Hierarchical models","Ch. 5: hierarchical models"],
    ["Posterior computation and checking","Parts III–IV: computation, model checking, and expansion"]
  ],["Conditional probability"],["Point estimation"]);
  S("statistics","stats-specialized","Nonparametric, robust, and multivariate statistics","Advanced","Distribution-light inference and high-dimensional structure.", "wasserman",[
    ["Nonparametric inference","Chs. 7–8: bootstrap and nonparametric estimation"],
    ["Multivariate models","Ch. 14: linear and logistic regression in vector form"],
    ["Graphical models","Ch. 17: directed and undirected graphical models"],
    ["Causal inference","Ch. 16: counterfactuals, confounding, and identification"],
    ["High-dimensional inference","Chs. 18–20: dimension reduction, classification, and learning"]
  ],["Asymptotic inference"],["Regularization"]);

  S("theoretical-cs","tcs-automata","Automata and computability","Intermediate","Machines, languages, computability, and undecidability.", "sipser",[
    ["Finite automata","Ch. 1: regular languages and finite automata"],
    ["Context-free languages","Ch. 2: grammars and pushdown automata"],
    ["Turing machines","Ch. 3: Turing machines and variants"],
    ["Decidability","Ch. 4: decidable languages"],
    ["Recognizability and undecidability","Ch. 5: reducibility and undecidable problems"]
  ],["Formal languages"],["Recursive functions"]);
  S("theoretical-cs","tcs-complexity","Computational complexity","Advanced","Resource bounds, reductions, randomized computation, and lower bounds.", "arora-barak",[
    ["Time and space complexity","Chs. 1–4: machines, P, NP, and space"],
    ["NP-completeness","Ch. 2: reductions and complete problems"],
    ["Polynomial hierarchy","Ch. 5: alternation and polynomial hierarchy"],
    ["Randomized complexity","Chs. 7–8: probabilistic computation and derandomization"],
    ["Circuit complexity","Chs. 6 and 14: circuits and lower bounds"]
  ],["Turing machines"],["Limit theorems"]);
  S("theoretical-cs","tcs-algorithms","Algorithm design and analysis","Intermediate","Correctness, efficiency, paradigms, and fundamental graph methods.", "clrs",[
    ["Asymptotic analysis","Chs. 1–3: algorithms, growth, and asymptotic notation"],
    ["Divide and conquer","Ch. 4: recurrences and divide-and-conquer analysis"],
    ["Dynamic programming","Ch. 14: dynamic programming"],
    ["Greedy algorithms","Ch. 15: greedy methods and matroids"],
    ["Graph algorithms","Parts VI–VII: elementary graph algorithms and shortest paths"]
  ],["Proof methods"],["Combinatorial counting"]);
  S("theoretical-cs","tcs-formal","Formal verification","Advanced","Transition systems, temporal logics, model checking, and probabilistic verification.", "baier-katoen",[
    ["Transition systems","Ch. 2: transition systems and program graphs"],
    ["Linear-time properties","Chs. 3–5: LTL and automata-based model checking"],
    ["Branching-time logic","Ch. 6: CTL and CTL*"],
    ["Probabilistic model checking","Chs. 10–11: Markov chains and PCTL"],
    ["Timed automata","Ch. 9: timed automata and real-time verification"]
  ],["Finite automata"],["Modal logic"]);
  S("theoretical-cs","tcs-types","Type theory and semantics","Advanced","Typed calculi, operational semantics, polymorphism, and program reasoning.", "pierce-tapl",[
    ["Untyped lambda calculus","Chs. 5–7: lambda calculus and implementation"],
    ["Operational semantics","Chs. 3 and 8: evaluation relations and arithmetic expressions"],
    ["Simply typed lambda calculus","Chs. 9–11: typing and extensions"],
    ["Subtyping and polymorphism","Chs. 15–18 and 22–24: subtyping and polymorphism"],
    ["Recursive and advanced types","Chs. 20–21 and 23: recursive types and bounded quantification"]
  ],["Deductive calculi"],["First-order syntax"]);

  S("artificial-intelligence","ai-search","Search and planning","Intermediate","State spaces, heuristic search, adversarial search, and planning.", "aima",[
    ["Problem-solving agents","Ch. 3: problem formulation and uninformed search"],
    ["Heuristic search","Ch. 3: informed search, A*, and heuristic functions"],
    ["Adversarial search","Ch. 5: games and adversarial search"],
    ["Constraint satisfaction","Ch. 6: constraint satisfaction problems"],
    ["Automated planning","Chs. 10–11: classical planning and planning under uncertainty"]
  ],["Graph algorithms"],["Propositional semantics"]);
  S("artificial-intelligence","ai-knowledge","Knowledge and reasoning","Intermediate","Logical agents, representation, uncertainty, and structured inference.", "poole-mackworth",[
    ["Propositional reasoning","Ch. 5: propositions and inference"],
    ["First-order knowledge representation","Ch. 13: relational representations"],
    ["Probabilistic reasoning","Chs. 8–9: probability and graphical models"],
    ["Decision networks","Ch. 9: decision networks and value of information"],
    ["Ontologies and actions","Chs. 13–15: ontologies, actions, and planning"]
  ],["First-order semantics"],["Conditional probability"]);
  S("artificial-intelligence","ai-ml","Machine learning foundations","Intermediate","Generalization, empirical risk, learnability, and standard learning families.", "shalev-ml",[
    ["PAC learning","Chs. 2–4: formal learning model and PAC learnability"],
    ["VC dimension","Chs. 5–6: VC dimension and fundamental theorem"],
    ["Convex learning","Chs. 12–14: convexity, regularization, and stochastic gradients"],
    ["Kernel methods","Chs. 15–16: support-vector and kernel methods"],
    ["Online learning","Ch. 21: online learning and regret"]
  ],["Limit theorems"],["Convex functions"]);
  S("artificial-intelligence","ai-deep","Deep learning","Advanced","Representation learning with neural networks and modern generative models.", "goodfellow-dl",[
    ["Feedforward neural networks","Ch. 6: deep feedforward networks"],
    ["Optimization for deep learning","Ch. 8: optimization methods"],
    ["Convolutional networks","Ch. 9: convolutional networks"],
    ["Sequence modelling","Ch. 10: recurrent and recursive networks"],
    ["Generative models","Chs. 16–20: probabilistic and deep generative models"]
  ],["Convex learning"],["Linear regression"]);
  S("artificial-intelligence","ai-rl","Reinforcement learning and agents","Advanced","Sequential interaction, value learning, policy optimization, and multi-agent behaviour.", "sutton-barto",[
    ["Multi-armed bandits","Ch. 2: action-value methods and exploration"],
    ["Markov decision processes","Ch. 3: finite MDPs"],
    ["Dynamic programming for control","Ch. 4: policy and value iteration"],
    ["Temporal-difference learning","Chs. 6–7: TD prediction and multi-step methods"],
    ["Policy-gradient methods","Ch. 13: policy approximation and gradients"]
  ],["Conditional probability"],["Dynamic programming"]);

  S("game-theory","games-strategic","Strategic and extensive games","Intermediate","Best responses, equilibrium, sequential play, and information.", "osborne-games",[
    ["Strategic games","Ch. 2: strategic games and Nash equilibrium"],
    ["Mixed strategies","Ch. 4: mixed-strategy equilibrium"],
    ["Extensive games","Ch. 5: extensive games with perfect information"],
    ["Imperfect information","Ch. 7: extensive games with imperfect information"],
    ["Subgame-perfect equilibrium","Ch. 6: subgame-perfect equilibrium"]
  ],["Utility functions"],["Conditional probability"]);
  S("game-theory","games-cooperative","Cooperative games","Advanced","Coalitions, transferable utility, bargaining, and cooperative solution concepts.", "maschler",[
    ["Coalitional games","Part IV: coalitional games with transferable utility"],
    ["Core","Part IV: the core and balancedness"],
    ["Shapley value","Part IV: values and the Shapley axioms"],
    ["Bargaining solutions","Part V: bargaining games and axiomatic solutions"],
    ["Matching games","Part V: matching and assignment games"]
  ],["Strategic games"],["Mixed strategies"]);
  S("game-theory","games-repeated","Repeated and evolutionary games","Advanced","Long-run interaction, learning, reputation, and population dynamics.", "fudenberg-tirole",[
    ["Repeated games","Chs. 5–6: repeated games and folk theorems"],
    ["Reputation","Ch. 9: reputation effects"],
    ["Learning in games","Ch. 4: dynamic games and adaptive behaviour"],
    ["Evolutionary stability","Ch. 2 applications: equilibrium refinements and stability"],
    ["Stochastic games","Ch. 13: stochastic games and dynamic incentives"]
  ],["Subgame-perfect equilibrium"],["Markov decision processes"]);
  S("game-theory","games-mechanisms","Mechanism design and social choice","Advanced","Rules that align incentives, aggregate preferences, and allocate resources.", "nisan-agt",[
    ["Social-choice mechanisms","Ch. 9: introduction to mechanism design"],
    ["Truthful mechanisms","Chs. 9–12: incentive compatibility and implementation"],
    ["Auction theory","Chs. 11–13: single- and multi-parameter auctions"],
    ["Algorithmic mechanism design","Chs. 9–13: computational mechanism design"],
    ["Combinatorial auctions","Chs. 11 and 15: combinatorial allocation and bidding"]
  ],["Strategic games"],["NP-completeness"]);
  S("game-theory","games-algorithmic","Algorithmic game theory","Advanced","Computational equilibrium, price of anarchy, networks, and learning.", "nisan-agt",[
    ["Equilibrium computation","Chs. 2–4: complexity of Nash equilibrium"],
    ["Price of anarchy","Chs. 17–18: selfish routing and inefficiency"],
    ["Network games","Chs. 19–21: network formation and congestion"],
    ["Computational social choice","Ch. 9 and Part IV: computation and collective choice"],
    ["Regret and no-regret learning","Ch. 4: learning, regret, and correlated equilibrium"]
  ],["NP-completeness"],["Online learning"]);

  S("systems-theory","syst-cybernetics","General systems and cybernetics","Foundation","Regulation, variety, stability, feedback, and system-environment relations.", "ashby-cybernetics",[
    ["State and transformation","Part One: mechanism, state, and transformation"],
    ["Stability and equilibrium","Part One: stability and equilibrium"],
    ["Feedback and regulation","Part Two: regulation and feedback"],
    ["Law of requisite variety","Part Two: requisite variety"],
    ["Black-box analysis","Part One: the black box and behavioural observation"]
  ],["Sets and functions"],["Propositional semantics"]);
  S("systems-theory","syst-dynamics","Dynamical systems","Intermediate","Flows, equilibria, stability, bifurcation, oscillation, and chaos.", "strogatz",[
    ["One-dimensional flows","Part I: flows on the line and bifurcations"],
    ["Phase-plane analysis","Part II: linear systems and phase plane"],
    ["Limit cycles","Part II: oscillations and limit cycles"],
    ["Bifurcation theory","Part III: bifurcations"],
    ["Chaos","Part III: Lorenz equations, maps, and routes to chaos"]
  ],["Continuity and differentiation"],["Metric spaces"]);
  S("systems-theory","syst-control","Control theory","Advanced","Feedback, state space, stability, robustness, and optimal control.", "astrom-murray",[
    ["Feedback principles","Chs. 1–2: feedback examples and system modelling"],
    ["State-space models","Chs. 3–4: dynamics and linear systems"],
    ["Stability and robustness","Chs. 5–6: stability and input-output response"],
    ["Controller design","Chs. 7–11: loop shaping, state feedback, and observers"],
    ["Optimal and nonlinear control","Chs. 2, 3, and 13: optimization and nonlinear dynamics"]
  ],["Phase-plane analysis"],["Convex programs"]);
  S("systems-theory","syst-networks","Network science","Intermediate","Graph structure, spreading, centrality, community, and network dynamics.", "newman-networks",[
    ["Network representations","Chs. 5–6: graphs and network data"],
    ["Centrality and connectivity","Chs. 6–7: paths, components, and centrality"],
    ["Random graph models","Chs. 11–13: random graphs and configuration models"],
    ["Community structure","Ch. 14: communities and modularity"],
    ["Dynamical processes on networks","Chs. 16–18: epidemics, cascades, and synchronization"]
  ],["Graph theory"],["Probability spaces"]);
  S("systems-theory","syst-complexity","Complex adaptive systems","Advanced","Emergence, adaptation, computation, scaling, and self-organization.", "mitchell-complexity",[
    ["Complexity and emergence","Part I: what is complexity and how it emerges"],
    ["Information and computation","Part II: computation and information"],
    ["Evolution and adaptation","Part III: evolution and genetic algorithms"],
    ["Cellular automata","Part II: cellular automata and computation"],
    ["Self-organization and scaling","Parts IV–V: networks, scaling, and self-organization"]
  ],["Chaos"],["Dynamical processes on networks"]);

  S("theoretical-linguistics","ling-phonology","Phonological theory","Intermediate","Formal representations and constraints on sound patterns.", "hayes-phonology",[
    ["Phonemes and allophones","Chs. 2–3: phonemic analysis and alternation"],
    ["Distinctive features","Ch. 4: feature theory"],
    ["Phonological rules","Chs. 5–6: rule notation and derivations"],
    ["Syllable structure","Ch. 13: syllabification"],
    ["Optimality theory","Chs. 14–15: constraints, tableaux, and analysis"]
  ],["Formal languages"],["Sets and functions"]);
  S("theoretical-linguistics","ling-morphology","Morphological theory","Intermediate","Word structure, inflection, derivation, productivity, and interfaces.", "haspelmath-morphology",[
    ["Morphemes and allomorphy","Chs. 2–3: words, lexemes, and inflection"],
    ["Inflection and derivation","Chs. 4–5: derivation and inflection"],
    ["Morphological typology","Ch. 9: morphological typology"],
    ["Productivity","Ch. 6: productivity and the lexicon"],
    ["Morphology–syntax interface","Chs. 7–8: compounds and morphology in grammar"]
  ],["Formal languages"],["Phonemes and allophones"]);
  S("theoretical-linguistics","ling-syntax","Syntactic theory","Intermediate","Constituency, phrase structure, movement, binding, and syntactic architecture.", "carnie-syntax",[
    ["Constituency","Chs. 2–3: parts of speech and constituency"],
    ["Phrase-structure theory","Chs. 6–7: X-bar theory and functional categories"],
    ["Argument structure","Chs. 8–9: theta roles and case"],
    ["Movement","Chs. 10–12: head, NP, and wh-movement"],
    ["Binding and control","Chs. 13–14: binding, control, and raising"]
  ],["Formal languages"],["Morphemes and allomorphy"]);
  S("theoretical-linguistics","ling-semantics","Formal semantics and pragmatics","Advanced","Compositional meaning, quantification, binding, modality, and context.", "heim-kratzer",[
    ["Compositional semantics","Ch. 1: truth conditions and compositionality"],
    ["Predicate logic for language","Chs. 2–3: predicates, types, and composition"],
    ["Quantification","Chs. 6–7: quantifier movement and scope"],
    ["Variable binding","Chs. 5 and 9: binding, pronouns, and relative clauses"],
    ["Intensional semantics","Ch. 12: intensionality and possible worlds"]
  ],["First-order semantics"],["Phrase-structure theory"]);
  S("theoretical-linguistics","ling-computational","Formal grammars and computational linguistics","Advanced","Grammars, parsing, language models, tagging, and structured prediction.", "jurafsky-martin",[
    ["Regular and finite-state methods","Ch. 2: regular expressions, text normalization, and finite-state ideas"],
    ["N-gram language models","Ch. 3: n-gram models and evaluation"],
    ["Sequence labelling","Chs. 8–9: tagging and sequence models"],
    ["Context-free grammars","Chs. 17–18: constituency grammars and parsing"],
    ["Dependency parsing","Ch. 19: dependency representations and parsing"]
  ],["Context-free languages"],["Phrase-structure theory"]);

  S("decision-theory","decision-preference","Preference and utility","Foundation","Formal preference relations, representation, utility, and rationality.", "fishburn-utility",[
    ["Preference relations","Chs. 1–2: binary preferences and order properties"],
    ["Utility functions","Chs. 3–4: utility representation"],
    ["Expected utility","Chs. 8–10: expected-utility structures"],
    ["Multiattribute utility","Chs. 5–7: additive and multiattribute utility"],
    ["Risk attitudes","Chs. 8–10: risk, lotteries, and utility curvature"]
  ],["Sets and functions"],["Probability spaces"]);
  S("decision-theory","decision-uncertainty","Decision under uncertainty","Intermediate","Choice under objective risk, subjective uncertainty, ambiguity, and incomplete information.", "gilboa-decision",[
    ["Decision under risk","Part I: expected utility under risk"],
    ["Subjective expected utility","Part II: states, acts, and subjective probability"],
    ["Ambiguity","Part III: non-unique priors and ambiguity aversion"],
    ["Case-based decisions","Part IV: case-based decision theory"],
    ["Bounded rationality","Concluding chapters: deviations from idealized rational choice"]
  ],["Utility functions"],["Conditional probability"]);
  S("decision-theory","decision-bayesian","Bayesian decision theory","Advanced","Loss, risk, Bayes rules, minimaxity, admissibility, and information.", "berger-decision",[
    ["Loss and risk","Ch. 1: loss, risk, and decision rules"],
    ["Bayes rules","Ch. 4: Bayes procedures"],
    ["Minimax decisions","Ch. 5: minimaxity and least-favourable distributions"],
    ["Admissibility","Chs. 6–8: complete classes and admissibility"],
    ["Value of information","Chs. 3–4: experimentation and preposterior analysis"]
  ],["Bayesian inference"],["Decision under risk"]);
  S("decision-theory","decision-sequential","Sequential decisions","Advanced","Dynamic choice, Markov decision processes, stopping, learning, and control.", "puterman-mdp",[
    ["Markov decision processes","Chs. 1–3: MDP models and optimality criteria"],
    ["Dynamic programming equations","Chs. 4 and 6: finite- and infinite-horizon equations"],
    ["Policy iteration","Ch. 6: policy and value iteration"],
    ["Optimal stopping","Ch. 3: stopping problems as MDPs"],
    ["Partially observed decisions","Ch. 12: partially observable models"]
  ],["Conditional probability"],["Dynamic programming"]);
  S("decision-theory","decision-mcda","Multi-criteria decision analysis","Intermediate","Objectives, trade-offs, value models, uncertainty, and decision structuring.", "keeney-raiffa",[
    ["Decision objectives","Chs. 2–3: objectives and attributes"],
    ["Value functions","Chs. 4–5: single-attribute value and utility"],
    ["Multiattribute value","Chs. 6–7: additive value models"],
    ["Trade-off analysis","Chs. 8–9: preferential independence and trade-offs"],
    ["Sensitivity analysis","Chs. 10–11: uncertainty and sensitivity"]
  ],["Utility functions"],["Convex programs"]);

  S("systems-science","sysci-thinking","Systems thinking","Foundation","Stocks, flows, feedback loops, delays, resilience, and leverage.", "meadows-systems",[
    ["Stocks and flows","Part One: system structure, stocks, and flows"],
    ["Feedback loops","Part One: balancing and reinforcing feedback"],
    ["Delays and oscillation","Part One: delays and dynamic behaviour"],
    ["Resilience and self-organization","Part Two: resilience, self-organization, and hierarchy"],
    ["Leverage points","Part Three: leverage points and system change"]
  ],["Feedback and regulation"],["State and transformation"]);
  S("systems-science","sysci-methods","Soft systems methodology","Intermediate","Problem situations, worldviews, purposeful activity models, and learning cycles.", "checkland-ssm",[
    ["Problem situations","Part I: systems thinking and real-world problem situations"],
    ["Root definitions","Part II: root definitions and CATWOE"],
    ["Conceptual models","Part II: purposeful activity models"],
    ["Comparison and accommodation","Part II: comparison, debate, and feasible change"],
    ["Learning cycles","Retrospective: learning, inquiry, and methodological development"]
  ],["Stocks and flows"],["Decision objectives"]);
  S("systems-science","sysci-or","Operations research","Intermediate","Optimization, networks, queues, inventories, simulation, and allocation.", "hillier-or",[
    ["Linear programming","Chs. 3–5: modelling, simplex, and duality"],
    ["Network optimization","Ch. 9: shortest paths, flows, and spanning trees"],
    ["Queueing models","Ch. 17: queueing theory"],
    ["Inventory models","Ch. 18: deterministic and stochastic inventory"],
    ["Discrete-event simulation","Ch. 20: simulation and output analysis"]
  ],["Convex programs"],["Probability spaces"]);
  S("systems-science","sysci-dynamics","System dynamics","Advanced","Causal structure, accumulation, feedback, simulation, and policy testing.", "sterman",[
    ["Causal-loop diagrams","Ch. 5: causal-loop diagrams"],
    ["Stock-and-flow modelling","Chs. 6–7: stocks, flows, and dynamics"],
    ["Delays","Chs. 8–9: delays and distributed processes"],
    ["Model calibration and validation","Ch. 21: model testing and validation"],
    ["Policy design","Chs. 14–20: nonlinearities, decision rules, and policy design"]
  ],["Stocks and flows"],["Phase-plane analysis"]);
  S("systems-science","sysci-engineering","Systems engineering","Advanced","Lifecycle definition, architecture, requirements, integration, verification, and assurance.", "incose",[
    ["System lifecycle","Part II: lifecycle concepts and stages"],
    ["Requirements engineering","Part III: business, stakeholder, and system requirements"],
    ["Architecture and design","Part III: architecture definition and design definition"],
    ["Integration, verification, and validation","Part III: integration, verification, transition, and validation"],
    ["Technical risk and configuration","Part IV: technical management, risk, configuration, and information"]
  ],["Conceptual models"],["Feedback principles"]);

  S("data-science","ds-workflow","Data-science workflow","Foundation","Questions, data transformation, reproducibility, models, and communication.", "wickham-r4ds",[
    ["Data import and tidying","Parts I–II: data import, transformation, and tidying"],
    ["Exploratory analysis","Part I: visualization and exploratory data analysis"],
    ["Workflow and reproducibility","Part IV: scripts, projects, and reproducible workflows"],
    ["Model workflow","Part III: modelling workflow and model evaluation"],
    ["Data communication","Part V: Quarto, communication, and publishing"]
  ],["Sampling distributions"],["Procedural abstraction"]);
  S("data-science","ds-engineering","Data engineering and systems","Intermediate","Storage models, distributed data, replication, transactions, and stream processing.", "kleppmann",[
    ["Data models","Ch. 2: relational, document, and graph data models"],
    ["Storage and retrieval","Ch. 3: storage engines and indexes"],
    ["Replication and partitioning","Chs. 5–6: replication and partitioning"],
    ["Transactions and consistency","Chs. 7 and 9: transactions and consistency"],
    ["Batch and stream processing","Chs. 10–11: batch and stream processing"]
  ],["Data import and tidying"],["Database models"]);
  S("data-science","ds-eda","Exploratory data analysis","Intermediate","Robust summaries, transformations, residuals, comparison, and graphical discovery.", "tukey-eda",[
    ["Resistant summaries","Chs. 1–3: stems, hinges, medians, and resistant summaries"],
    ["Data transformations","Chs. 7–10: re-expression and transformation"],
    ["Residual analysis","Chs. 11–14: fitting and residuals"],
    ["Two-way analysis","Chs. 16–18: two-way tables and comparisons"],
    ["Exploratory graphics","Throughout: schematic plots, letter values, and graphical diagnostics"]
  ],["Exploratory analysis"],["Expectation and variance"]);
  S("data-science","ds-learning","Statistical learning","Advanced","Supervised and unsupervised models, regularization, ensembles, and model selection.", "hastie-esl",[
    ["Supervised learning","Chs. 2–4: overview, linear methods, and classification"],
    ["Regularization and model selection","Chs. 3 and 7: shrinkage and model assessment"],
    ["Kernel and local methods","Chs. 5–6 and 12: bases, kernels, and support vectors"],
    ["Trees and ensembles","Chs. 9–10 and 15: trees, boosting, and random forests"],
    ["Unsupervised learning","Chs. 13–14: prototypes, clustering, and dimension reduction"]
  ],["Linear regression"],["Resampling"]);
  S("data-science","ds-causal","Causal inference and experimentation","Advanced","Potential outcomes, causal diagrams, identification, estimation, and target trials.", "hernan-robins",[
    ["Potential outcomes","Part I: causal effects and counterfactual outcomes"],
    ["Randomized experiments","Part I: randomized trials and effect measures"],
    ["Confounding and standardization","Part II: confounding, standardization, and weighting"],
    ["Causal diagrams","Part II: causal diagrams and identification"],
    ["Longitudinal and target-trial methods","Part III: time-varying treatments and target trials"]
  ],["Conditional probability"],["Graphical models"]);

  S("information-theory","info-entropy","Entropy and information measures","Intermediate","Entropy, divergence, mutual information, typicality, and inequalities.", "cover-thomas",[
    ["Entropy","Ch. 2: entropy and basic properties"],
    ["Relative entropy","Ch. 2: relative entropy and information inequality"],
    ["Mutual information","Ch. 2: mutual information and chain rules"],
    ["Asymptotic equipartition","Ch. 3: asymptotic equipartition property"],
    ["Information inequalities","Chs. 2 and 17: log-sum, data processing, and inequalities"]
  ],["Probability spaces"],["Limit theorems"]);
  S("information-theory","info-source","Source coding","Intermediate","Lossless codes, universal coding, compression, and algorithmic descriptions.", "cover-thomas",[
    ["Kraft inequality","Ch. 5: uniquely decodable and instantaneous codes"],
    ["Huffman coding","Ch. 5: optimal source codes"],
    ["Entropy rate","Ch. 4: entropy rates of stochastic processes"],
    ["Universal source coding","Ch. 13: universal coding"],
    ["Kolmogorov complexity","Ch. 14: algorithmic information theory"]
  ],["Entropy"],["Finite automata"]);
  S("information-theory","info-channel","Channel capacity","Advanced","Noisy channels, capacity, coding theorems, Gaussian channels, and reliability.", "mackay-info",[
    ["Discrete memoryless channels","Chs. 8–10: noisy-channel coding and channel models"],
    ["Channel capacity","Chs. 9–10: capacity and coding limits"],
    ["Gaussian channels","Chs. 11 and 18: continuous channels and Gaussian noise"],
    ["Error exponents","Chs. 10 and 15: reliability and coding performance"],
    ["Iterative decoding","Chs. 47–50: sparse graph codes and belief propagation"]
  ],["Mutual information"],["Limit theorems"]);
  S("information-theory","info-rate","Rate–distortion and statistical information","Advanced","Lossy compression, sufficient statistics, inference, and information geometry.", "cover-thomas",[
    ["Rate–distortion theory","Ch. 10: rate distortion"],
    ["Blahut–Arimoto algorithms","Ch. 10: computation of rate–distortion functions"],
    ["Fisher information","Ch. 11: information theory and statistics"],
    ["Maximum entropy","Ch. 12: maximum entropy and exponential families"],
    ["Information geometry","Ch. 11: relative entropy, estimation, and projection"]
  ],["Relative entropy"],["Point estimation"]);
  S("information-theory","info-network","Network and multiuser information","Advanced","Multiple access, broadcast, relay, interference, and distributed coding.", "elgamal-kim",[
    ["Multiple-access channels","Chs. 4–5: multiple-access channels"],
    ["Broadcast channels","Chs. 5–8: broadcast-channel bounds and coding"],
    ["Relay channels","Ch. 16: relay channels"],
    ["Distributed source coding","Chs. 10–11: Slepian–Wolf and Wyner–Ziv coding"],
    ["Interference networks","Chs. 6 and 8: interference channels and networks"]
  ],["Channel capacity"],["Network representations"]);

  S("computer-science","cs-programming","Programming and abstraction","Foundation","Procedures, data, abstraction, interpreters, and computational processes.", "sicp",[
    ["Procedural abstraction","Ch. 1: building abstractions with procedures"],
    ["Data abstraction","Ch. 2: building abstractions with data"],
    ["State and concurrency","Ch. 3: modularity, objects, and state"],
    ["Metalinguistic abstraction","Ch. 4: interpreters and language design"],
    ["Register-machine computation","Ch. 5: register machines and compilation"]
  ],["Sets and functions"],["Proof methods"]);
  S("computer-science","cs-architecture","Computer architecture","Intermediate","Instruction sets, processors, memory, parallelism, and performance.", "patterson-hennessy",[
    ["Instruction-set architecture","Ch. 2: instructions and RISC-V"],
    ["Processor datapaths","Ch. 4: processor implementation"],
    ["Memory hierarchy","Ch. 5: caches and virtual memory"],
    ["Parallel processors","Ch. 6: parallel processors"],
    ["Performance evaluation","Ch. 1: performance, power, and quantitative principles"]
  ],["Procedural abstraction"],["Finite automata"]);
  S("computer-science","cs-operating","Operating systems","Intermediate","Processes, synchronization, memory, storage, protection, and virtualization.", "silberschatz-os",[
    ["Processes and threads","Chs. 3–4: processes and threads"],
    ["Concurrency and synchronization","Chs. 6–7: synchronization and deadlocks"],
    ["Memory management","Chs. 9–10: memory and virtual memory"],
    ["File and storage systems","Chs. 11–13: mass storage, I/O, and files"],
    ["Protection and security","Chs. 17–18: protection and security"]
  ],["Processor datapaths"],["State and concurrency"]);
  S("computer-science","cs-databases","Database systems","Intermediate","Data models, relational algebra, SQL, indexing, transactions, and recovery.", "ramakrishnan-db",[
    ["Database models","Chs. 2–3: entity–relationship and relational models"],
    ["Relational algebra and SQL","Chs. 4–5: relational algebra, calculus, and SQL"],
    ["Schema design","Chs. 15–16: dependencies and normalization"],
    ["Indexes and query processing","Chs. 8–14: storage, indexes, and query evaluation"],
    ["Transactions and recovery","Chs. 17–20: transactions, concurrency, and recovery"]
  ],["Data abstraction"],["Sets and functions"]);
  S("computer-science","cs-networks","Networks and distributed computing","Intermediate","Layering, routing, transport, distributed coordination, and network security.", "kurose-ross",[
    ["Application-layer protocols","Ch. 2: web, email, DNS, and peer-to-peer systems"],
    ["Transport protocols","Ch. 3: UDP, TCP, congestion, and reliable transfer"],
    ["Network routing","Chs. 4–5: data plane, control plane, and routing"],
    ["Link and wireless networks","Chs. 6–7: links, LANs, wireless, and mobility"],
    ["Network security","Ch. 8: cryptographic principles and secure protocols"]
  ],["Processes and threads"],["Graph algorithms"]);

  S("cryptography","crypto-foundations","Cryptographic foundations","Intermediate","Security definitions, adversaries, reductions, pseudorandomness, and proof methods.", "katz-lindell",[
    ["Security definitions","Chs. 1–3: modern cryptography and formal definitions"],
    ["Computational security","Ch. 3: efficient adversaries and negligible probability"],
    ["Reduction proofs","Chs. 3–4: reductions and hybrid arguments"],
    ["Pseudorandom generators","Chs. 6–7: pseudorandomness"],
    ["Pseudorandom functions","Ch. 8: pseudorandom functions and permutations"]
  ],["Probability spaces"],["Time and space complexity"]);
  S("cryptography","crypto-symmetric","Symmetric cryptography","Intermediate","Encryption, authentication, authenticated encryption, and practical block-cipher use.", "boneh-shoup",[
    ["Symmetric encryption","Part I: semantic security and symmetric encryption"],
    ["Block ciphers","Part I: block ciphers and modes of operation"],
    ["Message authentication","Part I: message authentication codes"],
    ["Authenticated encryption","Part I: authenticated encryption"],
    ["Hash functions","Part I: cryptographic hashing"]
  ],["Pseudorandom functions"],["Probability spaces"]);
  S("cryptography","crypto-public","Public-key cryptography","Advanced","Number-theoretic assumptions, encryption, signatures, and key exchange.", "boneh-shoup",[
    ["Public-key encryption","Part II: public-key encryption and chosen-ciphertext security"],
    ["Diffie–Hellman key exchange","Part II: Diffie–Hellman and discrete logarithms"],
    ["RSA systems","Part II: RSA assumptions, encryption, and signatures"],
    ["Digital signatures","Part II: signature definitions and constructions"],
    ["Elliptic-curve cryptography","Part II: elliptic curves and discrete-log systems"]
  ],["Computational security"],["Group theory"]);
  S("cryptography","crypto-protocols","Cryptographic protocols","Advanced","Commitments, zero knowledge, secure computation, oblivious transfer, and protocols.", "goldreich-foc1",[
    ["Commitment schemes","Ch. 4: commitments and applications"],
    ["Zero-knowledge proofs","Ch. 4: zero knowledge and proof systems"],
    ["Proofs of knowledge","Ch. 4: knowledge extraction and proofs of knowledge"],
    ["Oblivious transfer","Ch. 4 and Volume 2 protocol foundations: oblivious transfer"],
    ["Secure multiparty computation","Volume 2, Ch. 7: general secure computation"]
  ],["Reduction proofs"],["First-order semantics"]);
  S("cryptography","crypto-privacy","Privacy and advanced cryptography","Advanced","Differential privacy, homomorphic computation, threshold trust, and post-quantum security.", "dwork-roth",[
    ["Differential privacy","Ch. 2: definition and basic properties"],
    ["Composition theorems","Ch. 3: composition and the privacy-loss viewpoint"],
    ["Laplace and Gaussian mechanisms","Chs. 3–4: fundamental mechanisms"],
    ["Private query release","Chs. 4–5: query release and exponential mechanisms"],
    ["Local differential privacy","Ch. 12: local privacy and randomized response"]
  ],["Relative entropy"],["Secure multiparty computation"]);

  const slug = (text) => text.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  const subfields = subfieldSpecs.map(({area,id,title,level,description}) => ({area,id,title,level,description}));
  const concepts = [];
  const pending = [];
  const titleToId = new Map();

  for (const spec of subfieldSpecs) {
    spec.concepts.forEach(([title, locator], index) => {
      const id = `${spec.id}:${slug(title)}`;
      const requiredTitles = index === 0 ? spec.bases : [spec.concepts[index - 1][0]];
      const parallelTitles = index === 0 ? spec.parallels : [];
      const concept = {
        id,
        title,
        subfield: spec.id,
        summary: `${title} within ${spec.title.toLowerCase()}: ${spec.description}`,
        required: [],
        parallel: [],
        readings: [{
          work: spec.workId,
          role: index < 2 ? "Core" : "Deepening",
          locator,
          purpose: `Use this located treatment to learn ${title} before advancing within ${spec.title.toLowerCase()}.`
        }]
      };
      concepts.push(concept);
      if (!titleToId.has(title)) titleToId.set(title, id);
      pending.push({concept,requiredTitles,parallelTitles});
    });
  }

  const unresolvedReferences = [];
  for (const item of pending) {
    const resolve = (title, type) => {
      const id = titleToId.get(title);
      if (!id) unresolvedReferences.push({concept:item.concept.id,type,title});
      return id;
    };
    item.concept.required = item.requiredTitles.map((title) => resolve(title,"required")).filter(Boolean);
    item.concept.parallel = item.parallelTitles.map((title) => resolve(title,"parallel")).filter(Boolean);
  }

  window.FORMAL_SCIENCES_CURRICULUM = {
    version: "1.0.0",
    coverageStatement: "This atlas publishes a complete, auditable core curriculum for the 14 declared areas: every listed concept belongs to a named subfield, has resolved sequential and parallel prerequisite links, and has at least one edition-specific work with a chapter, section, part, or whole-work locator. It does not claim that any evolving scholarly field has a closed universal denominator.",
    areas,
    subfields,
    concepts,
    works,
    unresolvedReferences
  };
})();
