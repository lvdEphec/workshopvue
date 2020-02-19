"use strict";

// Utiliser les ressources de ce lien : https://fr.vuejs.org/v2/guide/index.html
// Les liens pertinents pour réaliser ce workshop vous sont généralement fournis

// L'objectif ici est de transformer une page écrite en "vanilla js" vers l'utilisation de Vue.

const ARTICLES = {
	C01 : {libelle : "bottes", prix : 69.00},
	C59 : {libelle : "pantalon", prix : 45.00},	
	C48 : {libelle : "pull", prix : 55.55},	
	C04 : {libelle : "chapeau", prix : 999.99},	
	C17 : {libelle : "chemise", prix : 12.00}
}

// 01--- Inclure vue.js comme script dans votre html
// https://fr.vuejs.org/v2/guide/index.html#Pour-commencer

document.addEventListener('DOMContentLoaded', initialiserPage);

function initialiserPage() {
	
// 02a--- Créer un nouvel objet Vue dans une une variable nommée vmMagasin
// avec comme data, titre : "Mon magasin"
// 02b--- lier à l'élément d'id #zoneMagasin
// Elle va contenir les données relative à un magasin

// https://fr.vuejs.org/v2/guide/index.html#Rendu-declaratif

// 02c--- associer dans le html le titre, avec {{ titre }} au bon endroit pour que le nom s'affiche
// Changer le nom du magasin dans data pour tester

// ***************************************************************************

// 03--- Installer l'extension Chrome Vue.js devtools
// La tester, changer des valeurs.

// ***************************************************************************

// 04--- Créer les données dans data donc nous aurons besoin
// les données fournies à la création de l'objet seront ainsi réactives


// titre : "Mon magasin",

// les titres secondaires sont dans un objet
/* sousTitres : { 
			titreArticles : "Les Articles",
			titreAchats : "Mes Achats"
		   }*/
		   
// promotion: 0
// tva: 21

// articles est une référence à la constante fournie ARTICLES

// achats: est un objet vide, qui sera rempli comme suit { code_produit_achete : quantite_produit_achete }
// Possibilité de l'initialiser comme suit par exemple pour commencer directement par la partie des totaux  :
/* achats = { C01: 2, C017: 1 } */

// ***************************************************************************

// 05a afficher le pourcentage de promotion, sur base de la valeur dans la Vue, bidirectionnel (v-model)

// 05b afficher le pourcentage de TVA, sur base de la valeur dans la Vue, bidirectionnel (v-model)

// ***************************************************************************

// 06 afficher les données des sous-titres

// lier les données d'un object (ou d'un array)
// boucler avec v-for sur un objet : 
// https://stackoverflow.com/questions/41198697/how-can-i-bind-input-to-object-in-vue-js

// ***************************************************************************

// 07a Pour la liste des articles, vous allez devoir répéter le li pour chaque article dans articles, avec v-for
// nous aurons besoin des données de l'article eT du code
// https://fr.vuejs.org/v2/guide/list.html#v-for-avec-l%E2%80%99objet

// 07b afficher le libellé et le prix unitaire


// ***************************************************************************

// 07c pour le bouton acheter, il faut gérer un évènement click avec v-on
// gestion des événements : 
// https://fr.vuejs.org/v2/guide/events.html

// Lors d'un click, appeler la méthode acheter(code), en lui envoyant le code parcouru
// vous devrez définir cette methode dans l'atribut "method" de l'objet Vue (voir sur internet)
// Attention:
// Si le code existe déjà dans achats, alors on l'incrémente de 1
// s'il n'existe pas, on le crée et on initialise à 1
// Double attention : vous ne pouvez pas simplement modifier de la sorte, achats[code] = 1
// SInon cette donnée ne sera pas réactives
// utiliser le set, 
// this.$set(this.achats, code, 1)


// ***************************************************************************

// 07d La quantité ne doit être affichée que si achats[code] existe ou bien est supérieur à 0, avec v-if
// 07e Le for du label et l'id de l'input doivent valoir le code parcouru (dynamique), donc utiliser v-bind
// 07f L'input quantité doit être lié à l'achats[code], bidirectionnel, v-model

// ***************************************************************************

// 08a Les attributs computed sont calculés à partir des données de data
// ils sont gardé en mémoire et ne sont recalculé que si nécessaire. 
// ils sont réactifs
// propriétés calculées et méthodes
// https://fr.vuejs.org/v2/guide/computed.html

// 08b Préparer ces champs "computed" de manière logique
// totalAchatsBase
// totalAchatsTvac
// totalAchatsPromotionTvac

// Idéalement utiliser des "methods" à définir en parallèle
// appliquerTva(montant)
// appliquerPromotion(montant)

// **************************************************************************

// 09 Afficher dans la page html les totaux en vous basant sur les champs "computed"
// Pour le montant avec TVA et promotion, uniquement si la promotion est > 0 (v-if)

// 10 identifier et décomposer en composants, avec prop etc...
}
