'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, CheckCircle2, ChevronDown, Clock3, HeartPulse, MapPin, Menu, Phone, ShieldCheck, Sparkles, Star, Stethoscope, X, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const phone='+212530550770'
const maps='https://maps.app.goo.gl/inp9Ta1mpNGGFneY8?g_st=ic'
const wa=`https://wa.me/${phone.replace('+','')}`

const services=[
 ['Implantologie','Retrouvez confort, fonction et naturel avec une prise en charge personnalisée.'],
 ['Esthétique dentaire','Sublimez votre sourire avec des solutions pensées pour un résultat naturel.'],
 ['Orthodontie','Alignez progressivement vos dents pour un sourire harmonieux et une occlusion équilibrée.'],
 ['Soins dentaires','Prévention, caries, détartrage et soins conservateurs dans un environnement rassurant.'],
 ['Prothèses dentaires','Des restaurations adaptées à votre sourire, votre confort et vos besoins quotidiens.'],
 ['Chirurgie dentaire','Une approche précise et attentive pour les actes chirurgicaux nécessaires.']
]

const reviews=[
 ['Patient vérifié','Une équipe professionnelle, attentive et très rassurante. Je recommande vivement.'],
 ['Patient vérifié','Très bonne expérience au cabinet. Les explications sont claires et le suivi sérieux.'],
 ['Patient vérifié','Accueil chaleureux et prise en charge avec beaucoup de soin. Merci à toute l’équipe.']
]

function Reveal({children,delay=0}:{children:React.ReactNode,delay?:number}){return <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}

export default function Home(){
 const [open,setOpen]=useState(false)
 return <main>
  <header className="nav"><div className="nav-inner">
   <a className="brand" href="#top"><span className="brand-mark">✦</span><span><b>ANOUAL</b><small>CENTRE DENTAIRE</small></span></a>
   <nav className={open?'mobile-open':''}>{['Accueil','À propos','Services','Témoignages','Contact'].map((x,i)=><a key={x} href={['#top','#about','#services','#reviews','#contact'][i]} onClick={()=>setOpen(false)}>{x}</a>)}<a className="nav-cta" href={`tel:${phone}`}>Prendre rendez-vous <ArrowRight size={16}/></a></nav>
   <button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
  </div></header>

  <section id="top" className="hero">
   <div className="hero-bg"/>
   <div className="container hero-grid">
    <div className="hero-copy">
      <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="eyebrow"><span/> L’excellence dentaire à Kénitra</motion.div>
      <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.1}}>Votre sourire,<br/><em>notre expertise.</em></motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:.3}}>Une approche moderne, précise et humaine pour prendre soin de votre santé bucco-dentaire et révéler votre plus beau sourire.</motion.p>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.4}} className="actions"><a className="btn primary" href={`tel:${phone}`}><CalendarDays size={18}/> Prendre rendez-vous</a><a className="btn ghost" href={maps} target="_blank"><MapPin size={18}/> Nous trouver</a></motion.div>
      <div className="hero-trust"><div className="avatars"><span>IE</span><span>LB</span><span>+</span></div><div><div className="stars">★★★★★ <b>5.0</b></div><small>115 avis • Patients accompagnés avec soin</small></div></div>
    </div>
    <motion.div initial={{opacity:0,scale:.94,x:30}} animate={{opacity:1,scale:1,x:0}} transition={{duration:1,ease:[.22,1,.36,1]}} className="hero-card">
      <div className="orb orb1"/><div className="orb orb2"/>
      <div className="tooth">✦</div>
      <div className="floating-card fc1"><ShieldCheck/><span><b>Soins de confiance</b><small>Précision & confort</small></span></div>
      <div className="floating-card fc2"><HeartPulse/><span><b>Approche humaine</b><small>À votre écoute</small></span></div>
      <div className="hero-label"><span>ANOUAL</span><small>Centre Dentaire</small></div>
    </motion.div>
   </div>
  </section>

  <section className="stats"><div className="container stats-grid"><div><b>5.0</b><span>★★★★★</span><small>Note patients</small></div><div><b>115+</b><span>AVIS</span><small>Expériences partagées</small></div><div><b>2</b><span>DOCTEURS</span><small>Une équipe complémentaire</small></div><div><b>6</b><span>SPÉCIALITÉS</span><small>Une prise en charge complète</small></div></div></section>

  <section id="about" className="section"><div className="container about-grid"><Reveal><div className="photo-card"><div className="photo-placeholder"><Stethoscope size={72}/><span>Un espace pensé pour votre confort</span></div><div className="photo-badge"><Sparkles size={18}/><span><b>Expertise</b><small>au service de votre sourire</small></span></div></div></Reveal><Reveal delay={.1}><div className="section-copy"><div className="eyebrow"><span/> Notre cabinet</div><h2>Une dentisterie moderne, <em>sans compromis.</em></h2><p>Au Centre Dentaire ANOUAL, chaque consultation commence par l’écoute. Notre objectif : vous proposer des soins précis et personnalisés dans un cadre professionnel, serein et chaleureux.</p><div className="doctor-list"><div><div className="initial">IE</div><span><b>Dr. Ilias EL KHATTABI</b><small>Chirurgien-dentiste</small></span></div><div><div className="initial">LB</div><span><b>Dr. Lamyae BOUHI</b><small>Chirurgien-dentiste</small></span></div></div><a className="text-link" href="#contact">Découvrir notre approche <ArrowRight size={17}/></a></div></Reveal></div></section>

  <section id="services" className="section services"><div className="container"><Reveal><div className="section-head"><div><div className="eyebrow"><span/> Nos expertises</div><h2>Des soins pensés pour <em>vous.</em></h2></div><p>Une prise en charge complète pour préserver, restaurer et embellir votre sourire.</p></div></Reveal><div className="service-grid">{services.map(([title,text],i)=><Reveal key={title} delay={i*.06}><motion.article whileHover={{y:-8}} className="service-card"><div className="service-icon">{['◌','✧','⌁','♡','◇','＋'][i]}</div><div><span className="service-number">0{i+1}</span><h3>{title}</h3><p>{text}</p><a href="#contact">En savoir plus <ArrowRight size={15}/></a></div></motion.article></Reveal>)}</div></div></section>

  <section className="experience"><div className="container experience-grid"><Reveal><div><div className="eyebrow light"><span/> Votre expérience</div><h2>Le soin commence<br/>par la <em>confiance.</em></h2><p>De la première consultation au suivi, nous prenons le temps d’expliquer chaque étape pour que vous soyez acteur de votre traitement.</p><div className="checks"><div><CheckCircle2/> Diagnostic personnalisé</div><div><CheckCircle2/> Technologies et protocoles modernes</div><div><CheckCircle2/> Suivi attentif et conseils adaptés</div></div></div></Reveal><Reveal delay={.15}><div className="experience-card"><div className="quote">“</div><p>Parce qu’un beau sourire commence par une relation de confiance, nous plaçons votre confort au cœur de chaque visite.</p><div className="signature"><span>ANOUAL</span><small>Centre Dentaire</small></div></div></Reveal></div></section>

  <section id="reviews" className="section"><div className="container"><Reveal><div className="center-head"><div className="eyebrow"><span/> Ils nous font confiance</div><h2>Des patients <em>satisfaits.</em></h2><p>Une note de 5.0 basée sur les avis disponibles en ligne.</p></div></Reveal><div className="review-grid">{reviews.map(([who,text],i)=><Reveal key={i} delay={i*.08}><article className="review"><div className="stars">★★★★★</div><p>“{text}”</p><div className="reviewer"><div>✓</div><span><b>{who}</b><small>Expérience au Centre Dentaire ANOUAL</small></span></div></article></Reveal>)}</div></div></section>

  <section id="contact" className="contact"><div className="container contact-grid"><Reveal><div><div className="eyebrow light"><span/> Parlons de votre sourire</div><h2>Prêt à prendre<br/><em>rendez-vous ?</em></h2><p>Appelez-nous ou écrivez-nous sur WhatsApp. Nous vous accueillerons avec plaisir au cabinet.</p><div className="contact-actions"><a className="btn white" href={`tel:${phone}`}><Phone size={18}/> +212 5 30 55 07 70</a><a className="btn whatsapp" href={wa} target="_blank"><MessageCircle size={18}/> WhatsApp</a></div></div></Reveal><Reveal delay={.1}><div className="contact-info"><div><MapPin/><span><b>Adresse</b><small>Bureau n°7, 1er étage<br/>2, Ag. Rue Tarik Ibn Ziad, Av. Abou Bakr Seddik<br/>Kénitra 14000, Maroc</small></span></div><div><Clock3/><span><b>Horaires</b><small>Lun – Ven : 09:00–13:00 / 15:00–19:00<br/>Samedi : 09:00–13:00<br/>Dimanche : Fermé</small></span></div><a href={maps} target="_blank" className="map-btn">Ouvrir dans Google Maps <ArrowRight size={16}/></a></div></Reveal></div></section>

  <footer><div className="container footer-grid"><div className="brand"><span className="brand-mark">✦</span><span><b>ANOUAL</b><small>CENTRE DENTAIRE</small></span></div><p>Votre santé. Votre confiance. Votre sourire.</p><div><a href={`tel:${phone}`}>Appeler</a><a href={wa} target="_blank">WhatsApp</a><a href={maps} target="_blank">Itinéraire</a></div></div><div className="container copyright">© {new Date().getFullYear()} Centre Dentaire ANOUAL. Tous droits réservés.</div></footer>
 </main>
}
