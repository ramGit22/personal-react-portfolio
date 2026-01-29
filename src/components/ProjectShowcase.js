import React from 'react'
import colorSharp from '../assets/img/color-sharp.png'

export const ProjectShowcase = () => {
  const personalProjects = [
    {
      title: 'GWAS Target Finder',
      description:
        'Data tool that connects GWAS features to nearby genes and helps identify potential drug/target genes.',
      url: 'https://gwas-target-finder.vercel.app/',
    },
    {
      title: 'CryptoGate (Crypto Payment Gateway)',
      description:
        'Non-custodial payment gateway with campaigns, embeddable payment view, and transaction tracking.',
      url: 'https://crypto-payment-gateway-kappa.vercel.app/',
    },
    {
      title: 'TokenGen',
      description:
        'No-code tool for creating Solana SPL tokens with wallet-based interface and clear pricing.',
      url: 'https://tokengen.eu/',
    },
    {
      title: 'PresaleHub',
      description:
        'Launchpad/presale directory with project browsing, filtering, and sorting.',
      url: 'https://presalehub.xyz/',
    },
    {
      title: 'Tip Jar (Base Mini App)',
      description:
        'Mini app for sending ETH tips on Base, with username recognition and transaction tracking.',
      url: 'https://tip-jar-nu.vercel.app/',
    },
  ]

  const otherProjects = [
    {
      title: 'MonDexSwap',
      description:
        'DEX aggregator UI for token swapping on Monad network and points tracking.',
      url: 'https://mondexswap.app/',
    },
    {
      title: 'HelloWorldPrint',
      description:
        '"Hello, World!" tribute page that generates new entries and displays live statistics.',
      url: 'https://helloworldprint.netlify.app/',
    },
    {
      title: 'Gamma Hub (MIT-inspired)',
      description:
        '40Hz/gamma-themed web application (page requires JavaScript to render).',
      url: 'https://gamma-hub-mit.vercel.app/',
    },
    {
      title: 'FanTap Frenzy',
      description:
        'Tapping game with speed tracking and best score monitoring.',
      url: 'https://fantap.info/',
    },
  ]

  return (
    <section className="skill" id="project-showcase">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Project Showcase</h2>
              <p style={{ color: '#B8B8B8', marginBottom: '40px' }}>
                Self-made Projects
              </p>

              <div style={{ marginBottom: '50px' }}>
                {/* <h3 style={{ color: "#fff", marginBottom: "30px", fontSize: "32px" }}>Personal Projects</h3> */}
                {personalProjects.map((project, index) => (
                  <div
                    className="item"
                    key={index}
                    style={{ marginBottom: '25px', textAlign: 'left' }}
                  >
                    <h5 style={{ color: '#fff', marginBottom: '10px' }}>
                      {project.title}
                    </h5>
                    <p
                      style={{
                        color: '#B8B8B8',
                        marginBottom: '8px',
                        fontSize: '16px',
                      }}
                    >
                      {project.description}
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#4A9EFF',
                        textDecoration: 'none',
                        fontSize: '14px',
                      }}
                    >
                      {project.url}
                    </a>
                  </div>
                ))}
              </div>

              <div>
                <h3
                  style={{
                    color: '#fff',
                    marginBottom: '30px',
                    fontSize: '32px',
                  }}
                >
                  Other Projects
                </h3>
                {otherProjects.map((project, index) => (
                  <div
                    className="item"
                    key={index}
                    style={{ marginBottom: '25px', textAlign: 'left' }}
                  >
                    <h5 style={{ color: '#fff', marginBottom: '10px' }}>
                      {project.title}
                    </h5>
                    <p
                      style={{
                        color: '#B8B8B8',
                        marginBottom: '8px',
                        fontSize: '16px',
                      }}
                    >
                      {project.description}
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#4A9EFF',
                        textDecoration: 'none',
                        fontSize: '14px',
                      }}
                    >
                      {project.url}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
