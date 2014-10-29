$(document).ready(function()
{
	var move = 3;
	var coms = 1;
	$("#right, #picmore").click(function()
	{
		if (move == 0)
		{
			move = move + 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma5.jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma1.jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma2.jpg>");
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>OFFRE DE FORMATION : Développeur HTML, CSS, JS, MySQL et PHP</h3><br></br><p>Pour une utilisation experte de tous les outils les plus couramment utilisés sur les internets, cette formation par la pratique va faire de vous de véritables professionnels du web en devenir.</p><br></br><ul><li>Le langage web, les bons outils et les bonnes pratiques (18 heures)</li><li>Apprentissage du HTML, de CSS et de Bootstrap (58 heures)</li><li>Intégrer du JavaScript dans sa page (30 heures)</li><li>PHP et MySQL (25 heures)</li><li>Réseaux sociaux et vidéos (15 heures)</li><li>Poursuivre son apprentissage (8 heures)</li>");
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit4.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Très bonne formation qui ne se perd pas dans la théorie soporifique, là on rentre immédiatement dans le vif du sujet !»</h3>");
		}
		else if (move == 1)
		{
			move = move + 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma" + movemore + ".jpg>");
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>OFFRE DE FORMATION : Programmeur Ruby, Python et JavaScript.</h3><br></br><p>Au delà des touches d’un clavier ou des fonctionnalités d’un objet connecté se trouvent en réalité une multitude de lois qui régissent chacune des commandes qui nous sont offertes. Apprendre la programmation, c’est voir au delà des fonctionnalités que l’on nous offre au quotidien et pour en développer de nouvelles !</p><br></br><ul><li>Problèmes à résoudre via Ruby et Python (24 heures)</li><li>Développer soi-même sur JavaScript (16 heures)</li><li>Reproduire un programme déjà existant (16 heures)</li><li>Créer son propre programme (32 heures)</li>");
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit2.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Excellente formation, je la recommande aux membres de mon entourage et à mes collègues de travail.»</h3>");
		}
		else if (move == 2)
		{
			move = move + 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma" + movemore + ".jpg>");
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>OFFRE DE FORMATION : Développeur HTML et CSS</h3><br></br><p>Envie de prendre les commandes de vos pages web et mobiles ? Ce module de formation vous offre la possibilité d’apprendre les bases du code HTML et CSS afin de devenir en quelques semaines capables de programmer des sites webs complets et fonctionnels.</p><br></br><ul><li>Les bases du langage web (10 heures)</li><li>Apprentissage du HTML (25 heures)</li><li>Intégrer son CSS dans sa page (15 heures)</li><li>Bootstrap et les outils de tous les jours (8 heures)</li><li>Créez votre propre site ! (25 heures)</li>");
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit1.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Grâce à vous, j’ai de bonnes bases pour évoluer dans la programmation web ! A moi internet ! ;-)»</h3>");		
		}
		else if (move == 3)
		{
			move = move + 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma" + movemore + ".jpg>");
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>MICRO-FORMATIONS:</h3><br></br><p>Apprentissage du Web-Design : Accompagné par les professionnels de l’entreprise Nogentaise «PixeliseURSELF», ce module de formation vous donne les outils pour réussir un webdesign parfait pour vos propres sites et applis.</p><br></br><ul><li>Implémenter son Photoshop ou InDesign</li><li>Réaliser des formes et des Shapoes avec la suite Adobe Pro</li><li>Comment réaliser ses propres banques de données d’image.</li><li>Réaliser une charte grahique en 3 étapes.</li>");
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit5.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Les formateurs nous mettent tout de suite en pratique et on réalise à quel point il est aisé d’évoluer dans le codage web !»</h3>");
		}
		else if (move == 4)
		{
			move = move + 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma1.jpg>");
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>MICRO-FORMATIONS:</h3><br></br><p>Apprentissage des Réseaux sociaux : Facebook, Twitter, vous connaissez déjà pour vos utilisations persos, pas vrai ? Mais comment intégrer ces outils pour donner plus de lisibilité à vos projets, votre entreprise ou votre collectivité ?</p><br></br><ul><li>Facebook et Twitter en 15 minutes sur mon site.</li><li>Trucs et astuces à faire et à ne pas faire.</li><li>Community Manager, un véritable métier en première ligne.</li><li>Rester à la page et connaître les futurs moyens de communication de demain.</li>");
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit3.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Je cherchais une formation via les réseaux habituels, rien ne m’a satisfait autant que votre offre !»</h3>");
		}
		else if (move == 5)
		{
			move = move + 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma5.jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma1.jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma2.jpg>");
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>OFFRE DE FORMATION : Développeur HTML, CSS, JS, MySQL et PHP</h3><br></br><p>Pour une utilisation experte de tous les outils les plus couramment utilisés sur les internets, cette formation par la pratique va faire de vous de véritables professionnels du web en devenir.</p><br></br><ul><li>Le langage web, les bons outils et les bonnes pratiques (18 heures)</li><li>Apprentissage du HTML, de CSS et de Bootstrap (58 heures)</li><li>Intégrer du JavaScript dans sa page (30 heures)</li><li>PHP et MySQL (25 heures)</li><li>Réseaux sociaux et vidéos (15 heures)</li><li>Poursuivre son apprentissage (8 heures)</li>");
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit4.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Très bonne formation qui ne se perd pas dans la théorie soporifique, là on rentre immédiatement dans le vif du sujet !»</h3>");
		}
		else if (move == 6)
		{
			move = move + 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma1.jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma2.jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma3.jpg>");
			move = 2;
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>OFFRE DE FORMATION : Programmeur Ruby, Python et JavaScript.</h3><br></br><p>Au delà des touches d’un clavier ou des fonctionnalités d’un objet connecté se trouvent en réalité une multitude de lois qui régissent chacune des commandes qui nous sont offertes. Apprendre la programmation, c’est voir au delà des fonctionnalités que l’on nous offre au quotidien et pour en développer de nouvelles !</p><br></br><ul><li>Problèmes à résoudre via Ruby et Python (24 heures)</li><li>Développer soi-même sur JavaScript (16 heures)</li><li>Reproduire un programme déjà existant (16 heures)</li><li>Créer son propre programme (32 heures)</li>");	
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit2.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Excellente formation, je la recommande aux membres de mon entourage et à mes collègues de travail.»</h3>");
		}
		else
		{
			move = move;
		}
	});
	$("#left, #picless").click(function()
	{
		if (move == 6)
		{
			move = move - 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma1.jpg>");
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>OFFRE DE FORMATION : Développeur HTML et CSS</h3><br></br><p>Envie de prendre les commandes de vos pages web et mobiles ? Ce module de formation vous offre la possibilité d’apprendre les bases du code HTML et CSS afin de devenir en quelques semaines capables de programmer des sites webs complets et fonctionnels.</p><br></br><ul><li>Les bases du langage web (10 heures)</li><li>Apprentissage du HTML (25 heures)</li><li>Intégrer son CSS dans sa page (15 heures)</li><li>Bootstrap et les outils de tous les jours (8 heures)</li><li>Créez votre propre site ! (25 heures)</li>");
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit1.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Grâce à vous, j’ai de bonnes bases pour évoluer dans la programmation web ! A moi internet ! ;-)»</h3>");		
		}
		else if (move == 5)
		{
			move = move - 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma" + movemore + ".jpg>");
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>MICRO-FORMATIONS:</h3><br></br><p>Apprentissage du Web-Design : Accompagné par les professionnels de l’entreprise Nogentaise «PixeliseURSELF», ce module de formation vous donne les outils pour réussir un webdesign parfait pour vos propres sites et applis.</p><br></br><ul><li>Implémenter son Photoshop ou InDesign</li><li>Réaliser des formes et des Shapoes avec la suite Adobe Pro</li><li>Comment réaliser ses propres banques de données d’image.</li><li>Réaliser une charte grahique en 3 étapes.</li>");
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit5.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Les formateurs nous mettent tout de suite en pratique et on réalise à quel point il est aisé d’évoluer dans le codage web !»</h3>");
		}
		else if (move == 4)
		{
			move = move - 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma" + movemore + ".jpg>");
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>OFFRE DE FORMATION : Développeur HTML et CSS</h3><br></br><p>Envie de prendre les commandes de vos pages web et mobiles ? Ce module de formation vous offre la possibilité d’apprendre les bases du code HTML et CSS afin de devenir en quelques semaines capables de programmer des sites webs complets et fonctionnels.</p><br></br><ul><li>Les bases du langage web (10 heures)</li><li>Apprentissage du HTML (25 heures)</li><li>Intégrer son CSS dans sa page (15 heures)</li><li>Bootstrap et les outils de tous les jours (8 heures)</li><li>Créez votre propre site ! (25 heures)</li>");
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit1.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Grâce à vous, j’ai de bonnes bases pour évoluer dans la programmation web ! A moi internet ! ;-)»</h3>");		
		}
		else if (move == 3)
		{
			move = move - 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma" + moveless + ".jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma" + movemore + ".jpg>");
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>OFFRE DE FORMATION : Programmeur Ruby, Python et JavaScript.</h3><br></br><p>Au delà des touches d’un clavier ou des fonctionnalités d’un objet connecté se trouvent en réalité une multitude de lois qui régissent chacune des commandes qui nous sont offertes. Apprendre la programmation, c’est voir au delà des fonctionnalités que l’on nous offre au quotidien et pour en développer de nouvelles !</p><br></br><ul><li>Problèmes à résoudre via Ruby et Python (24 heures)</li><li>Développer soi-même sur JavaScript (16 heures)</li><li>Reproduire un programme déjà existant (16 heures)</li><li>Créer son propre programme (32 heures)</li>");
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit2.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Excellente formation, je la recommande aux membres de mon entourage et à mes collègues de travail.»</h3>");
		}
		else if (move == 2)
		{
			move = move - 1;
			var movemore = move + 1;
			var moveless = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma5.jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma" + move + ".jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma" + movemore + ".jpg>");
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>OFFRE DE FORMATION : Développeur HTML, CSS, JS, MySQL et PHP</h3><br></br><p>Pour une utilisation experte de tous les outils les plus couramment utilisés sur les internets, cette formation par la pratique va faire de vous de véritables professionnels du web en devenir.</p><br></br><ul><li>Le langage web, les bons outils et les bonnes pratiques (18 heures)</li><li>Apprentissage du HTML, de CSS et de Bootstrap (58 heures)</li><li>Intégrer du JavaScript dans sa page (30 heures)</li><li>PHP et MySQL (25 heures)</li><li>Réseaux sociaux et vidéos (15 heures)</li><li>Poursuivre son apprentissage (8 heures)</li>");
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit4.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Très bonne formation qui ne se perd pas dans la théorie soporifique, là on rentre immédiatement dans le vif du sujet !»</h3>");
		}
		else if (move == 1)
		{
			move = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma4.jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma5.jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma1.jpg>");
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>MICRO-FORMATIONS:</h3><br></br><p>Apprentissage des Réseaux sociaux : Facebook, Twitter, vous connaissez déjà pour vos utilisations persos, pas vrai ? Mais comment intégrer ces outils pour donner plus de lisibilité à vos projets, votre entreprise ou votre collectivité ?</p><br></br><ul><li>Facebook et Twitter en 15 minutes sur mon site.</li><li>Trucs et astuces à faire et à ne pas faire.</li><li>Community Manager, un véritable métier en première ligne.</li><li>Rester à la page et connaître les futurs moyens de communication de demain.</li>");
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit3.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Je cherchais une formation via les réseaux habituels, rien ne m’a satisfait autant que votre offre !»</h3>");
		}
		else if (move == 0)
		{
			move = move - 1;
			$("#picless").empty();
			$("#picless").append("<img id=less src=./images/forma3.jpg>");
			$("#pic").empty();
			$("#pic").append("<img src=./images/forma4.jpg>");
			$("#picmore").empty();
			$("#picmore").append("<img id=more src=./images/forma5.jpg>");
			move = 4;
			$("#descmore").empty();
			$("#descmore").append("<br></br><h3>MICRO-FORMATIONS:</h3><br></br><p>Apprentissage du Web-Design : Accompagné par les professionnels de l’entreprise Nogentaise «PixeliseURSELF», ce module de formation vous donne les outils pour réussir un webdesign parfait pour vos propres sites et applis.</p><br></br><ul><li>Implémenter son Photoshop ou InDesign</li><li>Réaliser des formes et des Shapoes avec la suite Adobe Pro</li><li>Comment réaliser ses propres banques de données d’image.</li><li>Réaliser une charte grahique en 3 étapes.</li>");
			$("#facecoms").empty();
			$("#facecoms").append("<img src=./images/commit5.jpg>");
			$("#realcoms").empty();
			$("#realcoms").append("<h3>«Les formateurs nous mettent tout de suite en pratique et on réalise à quel point il est aisé d’évoluer dans le codage web !»</h3>");
		}
		else
			move = move;
	});
	$("#switch").click(function()
	{
		coms = coms + 1;
		if (coms == 1)
		{
			$("#footcoms").empty();
			$("#footcoms").append("<img src=./images/man" + coms + ".jpg>");
			$("#footcoms").append("<div id=coms><blockquote><p>« Au départ, j’ai appris la programmation et le développement par passion. Pendant mes études d’ingénieur, j’ai toujours aimé hacké les choses qui m’environnaient. Par hacking, j’entends déconstruire : comprendre comment les mécanismes fonctionnent et les réutiliser pour leur trouver d’autres utilités.»</p></blockquote></div>");
		}
		else if (coms == 2)
		{
			$("#footcoms").empty();
			$("#footcoms").append("<img src=./images/man" + coms + ".jpg>");
			$("#footcoms").append("<div id=coms><blockquote><p>« La programmation a toujours été pour moi un objet d’attrait et de déchaînement de joie procuré par la réussite professionnelle qu’elle m’a apporté. En plus de vous apprendre à développer vos sites et vos outils, je suis aussi éco-manager et suis à même de vous livrer les moyens de vous faire connaître des professionnels ou de vendre vos services sur le marché du numérique. »</p></blockquote></div>");
		}
		else if (coms == 3)
		{
			$("#footcoms").empty();
			$("#footcoms").append("<img src=./images/man" + coms + ".jpg>");
			$("#footcoms").append("<div id=coms><blockquote><p>Nous recrutons en priorité des talents défavorisés ou sous-représentés dans l’entrepreneuriat digital et la programmation (femmes, personnes issues des zones rurales, des milieux modestes, seniors, personnes en difficulté d’insertion professionnelle ou en situation de handicap...). L’objectif de la formation est d’aider nos stagiaires à oser entreprendre et à intégrer efficacement le marché de travail.</p></blockquote></div>");
			coms = 0;
		}
		else
			coms = coms;
	});
	$("#pic").mouseenter(function()
	{
		$("#momore").css("display", "inline");
	});
	$("#pic").mouseleave(function()
	{
		$("#momore").css("display", "none");
	});
	$("#switch").mouseenter(function()
	{
		$("#switch").css("color", "#FFFFFF");
	});
	$("#switch").mouseleave(function()
	{
		$("#switch").css("color", "#333331");
	});
	$("#left").mouseenter(function()
	{
		$("#left").css("color", "#FFFFFF");
	});
	$("#left").mouseleave(function()
	{
		$("#left").css("color", "#333331");
	});
	$("#right").mouseenter(function()
	{
		$("#right").css("color", "#FFFFFF");
	});
	$("#right").mouseleave(function()
	{
		$("#right").css("color", "#333331");
	});
});
