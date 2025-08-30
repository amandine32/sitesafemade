import React, { useState } from 'react';
import { Shield, Users, AlertTriangle, MessageCircle, Zap, Download, Play, User, Code, Eye, Heart, Apple, Car, MapPin, Clock, Bell, Phone, FileText, ExternalLink, ChevronDown, ChevronUp, Mail, Send, Facebook, Twitter, Instagram, DollarSign } from 'lucide-react';
import AppleIcon from './components/AppleIcon';
import GooglePlayIcon from './components/GooglePlayIcon';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const renderAccueil = () => (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-black to-[#00602B] bg-clip-text text-transparent">
                  Safe
                </span>
                <span className="text-[#00602B]">Mate</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              SafeMate agit pour que chaque femme puisse se sentir libre et en sécurité dans l’espace public, tout en faisant rayonner les combats féministes.

              </p>
              <div className="flex flex-col sm:flex-row gap-4">

                <div className="flex flex-col sm:flex-row gap-4">
   
     
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
  <div
    className="rounded-full shadow-xl bg-white border-4 border-gray-100"
    style={{
      backgroundImage: 'url(/logo.png)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '300px',
      height: '300px',
    }}
  />
</div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ensemble pour la <span className="text-[#00602B]">liberté</span> et la <span className="text-[#00602B]">sécurité</span>  des femmes
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            SafeMate est une association qui transforme la peur en force collective et bâtit une société plus égalitaire, respectueuse et bienveillante.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#00602B]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sensibilisation & prévention</h3>
              <p className="text-gray-600">
              Campagnes, ateliers et événements pour lutter contre le harcèlement de rue et promouvoir l’égalité.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#00602B]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Communauté solidaire</h3>
              <p className="text-gray-600">
              Créer des espaces d’entraide et d’échanges entre femmes pour renforcer la sororité au quotidien.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#00602B]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Soutien aux associations</h3>
              <p className="text-gray-600">
              Donner de la visibilité aux initiatives féministes et faciliter la mise en lien avec le public.
              </p>
            </div>
            
            
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('fonctionnalites')}
              className="text-[#00602B] font-medium hover:text-[#004d22] transition-colors flex items-center space-x-2 mx-auto"
            >
              <span>Découvrir nos projets</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

   
     {/* Why SafeMate Section */}
<section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Pourquoi SafeMate ?</h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto">
        Notre mission est de créer un monde où chaque femme peut se déplacer en toute sécurité, 
        soutenue par une communauté bienveillante.
      </p>
    </div>

    {/* Image à la place des 3 cartes */}
    <div className="relative mb-8">  {/* espace de 32px sous l’image */}
      <img
        src="/imagesfilles.jpg"
        alt="Femmes solidaires SafeMate"
        className="rounded-2xl shadow-xl w-full object-cover h-96"
      />
    </div>
  
    <div className="bg-[#00602B] rounded-3xl px-8 py-6 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">
              Prête à rejoindre la communauté SafeMate ?
            </h3>
            <p className="text-xl mb-8 opacity-90">
            Rejoignez un réseau de femmes solidaires qui agissent ensemble pour un espace public plus sûr et plus juste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderAppSafeMate = () => (
    <>
      {/* L'app SafeMate Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              L'asso <span className="text-[#00602B]">SafeMate</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            SafeMate est née d’un constat urgent et d’une envie commune de faire bouger les lignes : une association qui agit ensemble, avec et pour les femmes, pour reconquérir l’espace public.
            </p>
          </div>
        </div>
      </section>

      {/* L'origine du projet Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">L'origine du projet</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  SafeMate est né d'un constat personnel et d'une réalité partagée par des millions de femmes : la peur de rentrer chez soi le soir, l'appréhension dans les transports en commun, l'inquiétude dans certains quartiers.
                </p>
                <p>
                  Face à ce problème de société, nous avons décidé d'agir. Non pas en restant dans l'indignation, mais en créant des solutions concrètes, technologiques et humaines.
                </p>
                <p>
                  SafeMate unit la technologie moderne et la force de la solidarité féminine pour créer un écosystème de protection et d'entraide.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Quatre femmes bavardant assises sur un banc"
                className="rounded-2xl shadow-xl w-full object-cover h-96"
              />

            </div>
          </div>
        </div>
      </section>

      {/* Notre mission Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre mission</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Créer un monde où chaque femme peut se déplacer librement, en toute sécurité, soutenue par une communauté bienveillante et des outils technologiques adaptés.
            </p>
          </div>
          
 
        </div>
      </section>

      {/* Nos valeurs Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos valeurs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ces principes fondamentaux guident chaque décision dans le développement de SafeMate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start space-x-4">
            <div className="flex items-center justify-center flex-shrink-0">
              <div className="w-6 h-6 rounded-full bg-[#00602B] flex items-center justify-center">
  <span className="w-2 h-2 rounded-full bg-white"></span>
</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Solidarité</h3>
                <p className="text-gray-600">S’élever ensemble dans l’écoute, l’entraide et le respect.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start space-x-4">
            <div className="flex items-center justify-center flex-shrink-0">
            <div className="w-6 h-6 rounded-full bg-[#00602B] flex items-center justify-center">
  <span className="w-2 h-2 rounded-full bg-white"></span>
</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Écoute</h3>
                <p className="text-gray-600">Chaque parole compte, chaque vécu est entendu.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start space-x-4">
            <div className="flex items-center justify-center flex-shrink-0">
            <div className="w-6 h-6 rounded-full bg-[#00602B] flex items-center justify-center">
  <span className="w-2 h-2 rounded-full bg-white"></span>
</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Engagement</h3>
                <p className="text-gray-600">Porter nos convictions dans chaque action concrète.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start space-x-4">
            <div className="flex items-center justify-center flex-shrink-0">
            <div className="w-6 h-6 rounded-full bg-[#00602B] flex items-center justify-center">
  <span className="w-2 h-2 rounded-full bg-white"></span>
</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sensibilisation</h3>
                <p className="text-gray-600">Faire émerger une prise de conscience collective.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'équipe SafeMate Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">L'équipe SafeMate</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une équipe de femmes et d'alliés unie par la même vision : créer un impact positif dans la vie des femmes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-[#00602B] bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-[#00602B]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fondatrice & Vision</h3>
              <p className="text-gray-600">
                À l'origine de SafeMate, portée par la conviction que chaque femme mérite de se sentir en sécurité.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-[#00602B] bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-[#00602B]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Développement Tech</h3>
              <p className="text-gray-600">
                Expertise technique pour créer une application robuste, sécurisée et intuitive.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-[#00602B] bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-[#00602B]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Communication</h3>
              <p className="text-gray-600">
                Sensibilisation et diffusion du message pour toucher le maximum de femmes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-[#00602B] bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#00602B]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sécurité & Prévention</h3>
              <p className="text-gray-600">
                Consultation d'experts pour développer des solutions de prévention efficaces.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-12 rounded-3xl text-center">
            <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
              "SafeMate est né de notre conviction profonde que la technologie peut et doit servir à résoudre les problèmes de société. Chaque ligne de code, chaque fonctionnalité est pensée pour avoir un impact concret sur la sécurité des femmes."
            </blockquote>
            <cite className="text-[#00602B] font-medium">— L'équipe SafeMate</cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 mt-12">
      + <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#00602B] rounded-3xl px-8 py-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Prête à rejoindre la communauté SafeMate ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
            Rejoignez un réseau de femmes solidaires qui agissent ensemble pour un espace public plus sûr et plus juste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
          </div>
        </div>
      </section>
    </>
  );




  const renderFonctionnalites = () => (
    <>
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Fonctionnalités <span className="text-[#00602B]">SafeMate App</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez tous les outils que SafeMate met à votre disposition pour vous accompagner au quotidien et renforcer votre sécurité.
            </p>
          </div>
        </div>
      </section>

      {/* Fonctionnalités disponibles Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6"> Se déplacer en sécurité, en toute confiance.</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des outils pour vous accompagner au quotidien. 
            </p>
          </div>

          {/* Trajets sécurisés entre femmes */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#00602B]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Trajets sécurisés entre femmes</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Trouvez des partenaires de trajet fiables dans votre zone pour voyager ensemble en toute sécurité.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Mise en relation avec des femmes de confiance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Vérification des profils utilisatrices</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Trajets partagés géolocalisés</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Système de notation et commentaires</span>
                </li>
              </ul>
            </div>
            <div className="relative mx-auto overflow-hidden">
  <img 
    src="/img_partenaires.png" 
    alt="Interface de l'application SafeMate"
    className="h-auto max-w-[1000px] mx-auto transition-transform duration-300 hover:scale-105"
  />
</div>
          </div>

          {/* Alertes géolocalisées */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="lg:order-2">
              <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-[#00602B]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Alertes géolocalisées en cas de danger</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Recevez des notifications sur les zones à risque signalées par la communauté et les autorités.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Alertes en temps réel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Carte interactive des zones à risque</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Notifications push personnalisables</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Suggestions d'itinéraires alternatifs</span>
                </li>
              </ul>
            </div>
            
            <div className="lg:order-1 flex items-center justify-center">
  <img
    src="/imgalerte.png"
    alt="Interface de l'application SafeMate"
   className="h-auto max-w-[1000px] mx-auto transition-transform duration-300 hover:scale-105"
  />
</div>
          </div>

          {/* Signalement de zones à risque */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-[#00602B]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Signalement de zones à risque</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Signalez anonymement les lieux où vous avez vécu ou observé des situations problématiques pour prévenir la communauté.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Signalement anonyme et sécurisé</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Géolocalisation précise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Catégorisation des incidents</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Modération par la communauté</span>
                </li>
              </ul>
            </div>
            
            <div className="lg:order-1 flex items-center justify-center">
  <img
    src="/img_map.png"
    alt="Interface de l'application SafeMate"
   className="h-auto max-w-[1000px] mx-auto transition-transform duration-300 hover:scale-105"
  />
</div>
          </div>

          {/* Réseau social entre femmes */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-[#00602B]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Réseau social entre femmes</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Rejoignez une communauté engagée, bienveillante et féminine.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Messagerie chiffrée de bout en bout</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Échanges avec des associations partenaires</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Modération active</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full"></div>
                  <span className="text-gray-600">Signalement rapide et anonyme</span>
                </li>
              </ul>
            </div>
            
            <div className="lg:order-1 flex items-center justify-center">
  <img
    src="/img_fil_actualite.png"
    alt="Interface de l'application SafeMate"
   className="h-auto max-w-[1000px] mx-auto transition-transform duration-300 hover:scale-105"
  />
</div>
          </div>
        </div>
      </section>

      {/* Sécurité et confidentialité Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sécurité et confidentialité</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Votre sécurité numérique est aussi importante que votre sécurité physique.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#00602B]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Chiffrement end-to-end</h3>
              <p className="text-gray-600">
                Toutes vos communications sont protégées par un chiffrement.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-[#00602B]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mode invisible</h3>
              <p className="text-gray-600">
                Utilisez l'application de manière totalement discrète sans laisser de traces.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bell className="w-8 h-8 text-[#00602B]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bouton d'urgence</h3>
              <p className="text-gray-600">
                Alerte immédiate à vos contacts et aux services d'urgence en un seul geste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prochainement Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Prochainement sur SafeMate</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous travaillons constamment à améliorer SafeMate avec de nouvelles fonctionnalités innovantes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-blue-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Safe Ride</h3>
                  <span className="text-blue-600 font-medium">À venir</span>
                </div>
              </div>
              <p className="text-gray-600">
                Service de covoiturage sécurisé exclusivement entre femmes, avec vérification d'identité et système de notation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-pink-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Safe Point</h3>
                  <span className="text-pink-600 font-medium">À venir</span>
                </div>
              </div>
              <p className="text-gray-600">
                Réseau de commerces et lieux publics partenaires où vous pouvez vous réfugier en cas de problème.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-12 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vous avez une idée de fonctionnalité ?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Nous sommes toujours à l'écoute de la communauté pour améliorer SafeMate. N'hésitez pas à nous faire part de vos suggestions !
            </p>
            <button className="bg-[#00602B] text-white px-8 py-4 rounded-full font-medium hover:bg-[#004d22] transition-colors">
              Proposer une idée
            </button>
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-20 mt-12">
      + <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#00602B] rounded-3xl px-8 py-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Prête à rejoindre la communauté SafeMate ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
            Rejoignez un réseau de femmes solidaires qui agissent ensemble pour un espace public plus sûr et plus juste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderConseilsRessources = () => (
    <>
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Conseils & <span className="text-[#00602B]">Ressources</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Des conseils pratiques et des ressources utiles pour vous aider à réagir face au harcèlement de rue, que vous soyez victime ou témoin.
            </p>
          </div>
        </div>
      </section>

      {/* Victime d'une agression Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Victime d'une agression ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Voici les premières étapes à suivre pour vous protéger et faire valoir vos droits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Que faire immédiatement ?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mettez-vous en sécurité dans un lieu public</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contactez le 3919 (Violences Femmes Info) - gratuit et anonyme</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Appelez le 17 en cas de danger immédiat</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Prévenez une personne de confiance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Où porter plainte / demander de l'aide</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Commissariat ou gendarmerie</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Dépôt de plainte en ligne via pre-plainte-en-ligne.gouv.fr</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Maisons de justice et du droit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Associations spécialisées dans votre région</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tes droits</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Droit de porter plainte sans délai de prescription pour agression</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Droit à l'accompagnement juridique gratuit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Droit à la protection si vous êtes en danger</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Droit au remboursement des soins médicaux</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Témoin d'une agression Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Témoin d'une agression ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Votre intervention peut faire la différence. Découvrez comment agir efficacement et en sécurité.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">La méthode des 5D</h3>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Une approche éprouvée pour intervenir en tant que témoin
            </p>

            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">D</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Distraire</h4>
                <p className="text-gray-600 text-sm">Créez une diversion pour interrompre l'agression</p>
                <p className="text-blue-600 text-xs mt-2 italic">Demandez l'heure, faites semblant de connaître la victime</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">D</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Déléguer</h4>
                <p className="text-gray-600 text-sm">Demandez de l'aide à d'autres personnes présentes</p>
                <p className="text-blue-600 text-xs mt-2 italic">Alertez le personnel, demandez à quelqu'un d'appeler la police</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">D</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Documenter</h4>
                <p className="text-gray-600 text-sm">Enregistrez la situation si c'est sécuritaire</p>
                <p className="text-blue-600 text-xs mt-2 italic">Filmez discrètement, notez les détails importants</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">D</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Diriger</h4>
                <p className="text-gray-600 text-sm">Intervenez directement si vous le pouvez en sécurité</p>
                <p className="text-blue-600 text-xs mt-2 italic">Dites fermement à l'agresseur d'arrêter</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">D</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Dialoguer</h4>
                <p className="text-gray-600 text-sm">Parlez avec la victime après l'incident</p>
                <p className="text-blue-600 text-xs mt-2 italic">Proposez votre aide, vos coordonnées si nécessaire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structures d'aide Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-[#00602B]" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Structures d'aide</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des professionnels sont là pour vous accompagner. N'hésitez pas à les contacter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#00602B] bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#00602B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3919 - Violences Femmes Info</h3>
                  <p className="text-gray-600 mb-3">Numéro national gratuit et anonyme, 24h/24 et 7j/7</p>
                  <p className="text-[#00602B] font-medium">3919</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#00602B] bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-6 h-6 text-[#00602B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">En Avant Toute(s)</h3>
                  <p className="text-gray-600 mb-3">Chat en ligne pour les femmes victimes de violences</p>
                  <p className="text-[#00602B] font-medium">enavanttoutes.fr</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#00602B] bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#00602B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">SOS Viols Femmes Informations</h3>
                  <p className="text-gray-600 mb-3">Écoute spécialisée pour les victimes de violences sexuelles</p>
                  <p className="text-[#00602B] font-medium">0 800 05 95 95</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#00602B] bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-6 h-6 text-[#00602B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning Familial</h3>
                  <p className="text-gray-600 mb-3">Information et accompagnement sur tous vos droits</p>
                  <p className="text-[#00602B] font-medium">planning-familial.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ressources à télécharger Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="w-8 h-8 text-[#00602B]" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ressources à télécharger</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des documents pratiques à garder avec vous ou à partager autour de vous.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl text-center h-full flex flex-col">
              <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-[#00602B]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Guide de réaction SafeMate</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Tous nos conseils pour réagir face au harcèlement de rue
              </p>
              <p className="text-gray-500 text-sm mb-6">PDF - 2.5 Mo</p>
              <button className="bg-gray-200 text-gray-600 px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>À venir</span>
              </button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center h-full flex flex-col">
              <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-[#00602B]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Affiche SafeMate</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Matériel de sensibilisation à imprimer et diffuser
              </p>
              <p className="text-gray-500 text-sm mb-6">PDF - 1.2 Mo</p>
              <button className="bg-gray-200 text-gray-600 px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>À venir</span>
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-12 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ces ressources arrivent bientôt !</h3>
            <p className="text-lg text-gray-600 mb-8">
              Nous finalisons actuellement ces documents avec des experts pour vous proposer les conseils les plus pertinents et à jour.
            </p>
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-20 mt-12">
      + <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#00602B] rounded-3xl px-8 py-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Prête à rejoindre la communauté SafeMate ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
            Rejoignez un réseau de femmes solidaires qui agissent ensemble pour un espace public plus sûr et plus juste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderFAQ = () => (
    <>
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-[#00602B]" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Questions <span className="text-[#00602B]">Fréquentes</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Trouvez rapidement les réponses à vos questions sur SafeMate, son fonctionnement et votre sécurité.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Sécurité & Confidentialité */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sécurité & Confidentialité</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ('data-protection')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">Mes données sont-elles protégées ?</span>
                  {openFAQ === 'data-protection' ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === 'data-protection' && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    <p className="mb-4">
                      Absolument. SafeMate utilise un chiffrement de bout en bout pour toutes vos communications et données personnelles. Nous respectons strictement le RGPD et ne partageons jamais vos informations avec des tiers sans votre consentement explicite.
                    </p>
                    <p>
                      Vous gardez le contrôle total sur vos données : vous pouvez les consulter, les modifier ou les supprimer à tout moment depuis les paramètres de l'application.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ('witness-aggression')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">Que faire si je vois une agression ?</span>
                  {openFAQ === 'witness-aggression' ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === 'witness-aggression' && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    <p className="mb-4">
                      Utilisez la méthode des 5D : <strong>Distraire</strong> (créer une diversion), <strong>Déléguer</strong> (demander de l'aide), <strong>Documenter</strong> (filmer si sécuritaire), <strong>Diriger</strong> (intervenir directement si possible), <strong>Dialoguer</strong> (parler avec la victime après).
                    </p>
                    <p>
                      Votre sécurité est prioritaire. N'intervenez directement que si vous êtes sûr(e) de pouvoir le faire sans danger.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Fonctionnalités */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Fonctionnalités</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ('report-without-victim')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">Puis-je signaler un lieu sans être victime ?</span>
                  {openFAQ === 'report-without-victim' ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === 'report-without-victim' && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    <p>
                      Oui, absolument ! Vous pouvez signaler des lieux que vous jugez dangereux ou où vous avez été témoin d'incidents. Ces signalements préventifs sont anonymes et aident la communauté à éviter les zones à risque. Chaque signalement est modéré pour éviter les abus.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ('trip-sharing')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">Comment fonctionne le partage de trajet ?</span>
                  {openFAQ === 'trip-sharing' ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === 'trip-sharing' && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    <p className="mb-4">
                      Le partage de trajet SafeMate vous met en relation avec d'autres femmes pour voyager ensemble. Voici comment ça marche :
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Publiez votre trajet avec l'heure et le lieu</li>
                      <li>Consultez les profils des autres utilisatrices</li>
                      <li>Contactez-vous via le chat sécurisé</li>
                      <li>Partagez votre position en temps réel pendant le trajet</li>
                      <li>Notez votre expérience après le voyage</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ('offline-mode')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">SafeMate fonctionne-t-elle sans internet ?</span>
                  {openFAQ === 'offline-mode' ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === 'offline-mode' && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    <p>
                      Certaines fonctionnalités de SafeMate sont disponibles hors ligne : le bouton d'urgence, l'accès aux numéros d'urgence pré-enregistrés, et la consultation des zones à risque téléchargées. Cependant, les fonctionnalités communautaires (chat, partage de trajet) nécessitent une connexion internet.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Utilisation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Utilisation</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ('free-app')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">SafeMate est-elle gratuite ?</span>
                  {openFAQ === 'free-app' ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === 'free-app' && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    <p>
                      Oui, SafeMate est entièrement gratuite ! Nous croyons que la sécurité ne doit pas avoir de prix. L'application est financée par des partenariats éthiques et des subventions publiques, sans jamais compromettre votre vie privée ou vendre vos données.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ('minor-usage')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">Puis-je utiliser SafeMate si je suis mineure ?</span>
                  {openFAQ === 'minor-usage' ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === 'minor-usage' && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    <p>
                      SafeMate est accessible aux mineures de plus de 13 ans avec l'autorisation parentale. Des mesures de sécurité renforcées sont appliquées : modération accrue, limitation des fonctionnalités de géolocalisation, et accès prioritaire aux ressources d'aide spécialisées pour les mineures.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ('contribute-project')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">Comment puis-je contribuer au projet SafeMate ?</span>
                  {openFAQ === 'contribute-project' ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === 'contribute-project' && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    <p className="mb-4">
                      Il existe plusieurs façons de contribuer à SafeMate :
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Partagez l'application autour de vous</li>
                      <li>Participez aux signalements et à la modération communautaire</li>
                      <li>Proposez des améliorations via notre formulaire de feedback</li>
                      <li>Rejoignez notre programme de bêta-testeuses</li>
                      <li>Soutenez financièrement le projet via les dons</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Communauté & Support */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Communauté & Support</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ('inappropriate-messages')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">Que faire si je reçois des messages inappropriés dans le chat ?</span>
                  {openFAQ === 'inappropriate-messages' ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === 'inappropriate-messages' && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    <p>
                      Signalez immédiatement le message via le bouton de signalement. Notre équipe de modération intervient dans les 2 heures. Vous pouvez aussi bloquer l'utilisatrice et quitter la conversation. Tous les signalements sont pris au sérieux et peuvent entraîner la suspension du compte fautif.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ('emergency-services')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">SafeMate remplace-t-elle les services d'urgence ?</span>
                  {openFAQ === 'emergency-services' ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === 'emergency-services' && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Non, SafeMate ne remplace jamais les services d'urgence officiels.</strong> En cas de danger immédiat, appelez toujours le 17 (police) ou le 15 (SAMU). SafeMate est un outil de prévention et d'entraide communautaire qui complète, mais ne substitue pas, les services d'urgence traditionnels.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white p-12 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vous ne trouvez pas la réponse à votre question ?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Notre équipe est là pour vous aider. N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-[#00602B] text-white px-8 py-4 rounded-full font-medium hover:bg-[#004d22] transition-colors"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>
  {/* CTA Section */}
  <section className="py-20 mt-12">
      + <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#00602B] rounded-3xl px-8 py-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Prête à rejoindre la communauté SafeMate ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
            Rejoignez un réseau de femmes solidaires qui agissent ensemble pour un espace public plus sûr et plus juste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
          </div>
        </div>
      </section>
    </>
  );
  const renderContact = () => (
    <>
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-[#00602B] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-[#00602B]" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Contactez-<span className="text-[#00602B]">nous</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Une question, une suggestion, un problème ? Notre équipe est là pour vous écouter et vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Parlons ensemble</h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                SafeMate est avant tout une communauté. Vos retours, suggestions et questions nous aident à améliorer constamment l'application pour mieux vous servir.
              </p>

              {/* Contact Methods */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00602B] bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#00602B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-[#00602B] font-medium mb-2">contact@safemate.fr</p>
                    <p className="text-gray-600 text-sm">Nous répondons généralement sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00602B] bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#00602B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Réseaux sociaux</h3>
                    <div className="flex space-x-4 mb-2">
                      <Facebook className="w-5 h-5 text-blue-600" />
                      <Twitter className="w-5 h-5 text-blue-400" />
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </div>
                    <p className="text-gray-600 text-sm">Suivez-nous pour les dernières actualités</p>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-12">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Urgence ou danger immédiat ?</h4>
                    <p className="text-red-800 text-sm mb-4">
                      SafeMate ne remplace pas les services d'urgence. En cas de danger immédiat :
                    </p>
                    <div className="space-y-2 text-sm">
                      <div><strong className="text-red-900">Police :</strong> 17</div>
                      <div><strong className="text-red-900">SAMU :</strong> 15</div>
                      <div><strong className="text-red-900">Violences Femmes Info :</strong> 3919</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00602B] focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00602B] focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00602B] focus:border-transparent transition-colors"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="bug">Signaler un bug</option>
                    <option value="suggestion">Suggestion d'amélioration</option>
                    <option value="support">Support technique</option>
                    <option value="partnership">Partenariat</option>
                    <option value="press">Demande presse</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Décrivez votre question ou votre message..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00602B] focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00602B] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#004d22] transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer le message</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  En envoyant ce message, vous acceptez notre politique de confidentialité.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Other Contact Methods Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Autres moyens de nous contacter</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Suggestions</h3>
              <p className="text-gray-600 mb-6">
                Une idée pour améliorer SafeMate ? Partagez-la avec nous !
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Proposer une idée
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Presse & Médias</h3>
              <p className="text-gray-600 mb-6">
                Journalistes et médias, contactez notre service presse.
              </p>
              <p className="text-orange-600 font-medium">presse@safemate.fr</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Partenariats</h3>
              <p className="text-gray-600 mb-6">
                Associations, entreprises, collectivités : travaillons ensemble.
              </p>
              <p className="text-purple-600 font-medium">partenariats@safemate.fr</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Donation Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Soutenez SafeMate</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                SafeMate est un projet à but non lucratif. Votre soutien nous aide à maintenir l'application gratuite et à développer de nouvelles fonctionnalités pour la sécurité des femmes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#00602B] text-white px-8 py-4 rounded-full font-medium hover:bg-[#004d22] transition-colors flex items-center justify-center space-x-2">
                  
                  <span>Nous faire un don</span>
                </button>
                <button className="border-2 border-[#00602B] text-[#00602B] px-8 py-4 rounded-full font-medium hover:bg-[#00602B] hover:text-white transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Impact de vos dons</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Maintien de l'application gratuite pour toutes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Développement de nouvelles fonctionnalités</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Campagnes de sensibilisation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00602B] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Support technique et modération</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  {/* CTA Section */}
  <section className="py-20 mt-12">
      + <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#00602B] rounded-3xl px-8 py-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Prête à rejoindre la communauté SafeMate ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
            Rejoignez un réseau de femmes solidaires qui agissent ensemble pour un espace public plus sûr et plus juste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
          </div>
        </div>
      </section>
    </>
  );
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center py-4">
            <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
            <img
    src="/logo.png"
    alt="Logo SafeMate"
    className="w-10 h-10 rounded-full object-cover bg-white p-1 shadow-sm"
  />
  <span className="text-xl font-semibold text-gray-900">SafeMate</span>
</div>
      
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setCurrentPage('accueil')}
                className={`transition-colors ${currentPage === 'accueil' ? 'text-[#00602B] font-medium' : 'text-gray-600 hover:text-[#00602B]'}`}
              >
                Accueil
              </button>
              <button 
                onClick={() => setCurrentPage('app-safemate')}
                className={`transition-colors ${currentPage === 'app-safemate' ? 'text-[#00602B] font-medium' : 'text-gray-600 hover:text-[#00602B]'}`}
              >
                L'Asso SafeMate
              </button>
              <button 
                onClick={() => setCurrentPage('fonctionnalites')}
                className={`transition-colors ${currentPage === 'fonctionnalites' ? 'text-[#00602B] font-medium' : 'text-gray-600 hover:text-[#00602B]'}`}
              >
                Nos projets
              </button>
              <button 
                onClick={() => setCurrentPage('conseils-ressources')}
                className={`transition-colors ${currentPage === 'conseils-ressources' ? 'text-[#00602B] font-medium' : 'text-gray-600 hover:text-[#00602B]'}`}
              >
                Conseils & Ressources
              </button>
              <button 
                onClick={() => setCurrentPage('faq')}
                className={`transition-colors ${currentPage === 'faq' ? 'text-[#00602B] font-medium' : 'text-gray-600 hover:text-[#00602B]'}`}
              >
                FAQ
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className={`transition-colors ${currentPage === 'contact' ? 'text-[#00602B] font-medium' : 'text-gray-600 hover:text-[#00602B]'}`}
              >
                Contact / Nous soutenir
              </button>
            </nav>
            

          </div>
        </div>
      </header>

      {/* Main Content */}
      {currentPage === 'accueil' && renderAccueil()}
      {currentPage === 'app-safemate' && renderAppSafeMate()}
      {currentPage === 'fonctionnalites' && renderFonctionnalites()}
      {currentPage === 'conseils-ressources' && renderConseilsRessources()}
      {currentPage === 'faq' && renderFAQ()}
      {currentPage === 'contact' && renderContact()}

      {/* Footer */}
<footer className="bg-white border-t py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <img
            src="/logo.png"
            alt="Logo SafeMate"
            className="w-10 h-10 rounded-full object-cover bg-white p-1 shadow-sm"
          />
          <span className="text-xl font-semibold text-gray-900">SafeMate</span>
        </div>
        <p className="text-gray-600">
        Une force collective pour visibiliser, soutenir et amplifier les combats féminins.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">NAVIGATION</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setCurrentPage('accueil')}
                    className="text-gray-600 hover:text-[#00602B] transition-colors"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('app-safemate')}
                    className="text-gray-600 hover:text-[#00602B] transition-colors"
                  >
                    L'Asso SafeMate
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('fonctionnalites')}
                    className="text-gray-600 hover:text-[#00602B] transition-colors"
                  >
                    Nos projets
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('conseils-ressources')}
                    className="text-gray-600 hover:text-[#00602B] transition-colors"
                  >
                    Conseils & Ressources
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('faq')}
                    className="text-gray-600 hover:text-[#00602B] transition-colors"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="text-gray-600 hover:text-[#00602B] transition-colors"
                  >
                    Contact / Nous soutenir
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">LÉGAL</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#00602B] transition-colors">Mentions légales</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00602B] transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00602B] transition-colors">RGPD</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-6 text-center text-gray-500">
            © 2024 SafeMate. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;