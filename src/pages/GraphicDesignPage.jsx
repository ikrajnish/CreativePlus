import React, { useState, useMemo, useCallback } from "react";
import { Button } from "../components/Button";
import Modal from "../components/Modal";
import graphicDesignVideo from "../assets/graphic-design.gif";
import LogoDesignGif from "../assets/Logodesign.gif";
import BrandGif from "../assets/Brand.gif";
import PrintingGif from "../assets/Printing.gif";
import WebUiGif from "../assets/Webui.gif";

// Sample Image Imports
import LogoDesign1 from "../assets/logofirst.png";
import LogoDesign2 from "../assets/logosecond.png";
import LogoDesign3 from "../assets/logothird.png";
import LogoDesign4 from "../assets/logoFourth.png";
import LogoDesign5 from "../assets/logoFifth.png";
import LogoDesign6 from "../assets/logoSixth.png";
import LogoDesign7 from "../assets/logoSeventh.png";
import LogoDesign8 from "../assets/logoEight.png";
import LogoDesign9 from "../assets/logoNine.png";
import LogoDesign10 from "../assets/logoTen.png";
import Packging1 from "../assets/Packging_01.png";
import Packging2 from "../assets/Packging_02.png";
import Packging3 from "../assets/Packging_03.png";
import Packging4 from "../assets/Packging_04.png";
import Packging5 from "../assets/Packging_05.png";
import Packging6 from "../assets/Packging_06.jpg";
import Packging7 from "../assets/Packging_07.png";
import Packging8 from "../assets/Packging_08.png";
import SocialMedia1 from "../assets/SocialMediaPost_01.png";
import SocialMedia2 from "../assets/SocialMediaPost_02.png";
import SocialMedia3 from "../assets/SocialMediaPost_03.png";
import SocialMedia4 from "../assets/socialmediaPost_04.jpg";
import SocialMedia5 from "../assets/SocialmediaPost_05.png";
import SocialMedia6 from "../assets/SocialmediaPost_06.png";
import SocialMedia7 from "../assets/SocialmediaPost_07.png";
import SocialMedia8 from "../assets/SocialmediaPost_08.png";
import SocialMedia9 from "../assets/SocialmediaPost_09.png";

export function GraphicDesignPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = useMemo(() => [
    { 
      title: "Logo Design", 
      desc: "Crafting memorable logos that represent your brand's identity.", 
      img: LogoDesignGif, 
      samples: [LogoDesign1, LogoDesign2, LogoDesign3, LogoDesign4, LogoDesign5, LogoDesign6, LogoDesign7, LogoDesign8, LogoDesign9, LogoDesign10] 
    },
    { 
      title: "Brand Identity Design", 
      desc: "Creating cohesive visual identities across all channels.", 
      img: BrandGif, 
      samples: [
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756116176/01_rcfbct.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756116173/02_fq86kz.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756116164/03_eq1bus.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756116162/04_y10p76.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756116178/05_aom6om.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756116163/06_i1acnk.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756116179/07_bgmpin.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756116172/08_rminjt.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756116158/09_sg04ph.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756116177/10_ex6m9r.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756116171/11_jtbni6.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756116172/12_vehjml.jpg",
      ] 
    },
    { 
      title: "Print Design", 
      desc: "Designing brochures, business cards, flyers, and more.", 
      img: PrintingGif, 
      samples: [
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117407/01_grzxra.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117419/01_omuhjq.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117431/02_xpjfgq.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117430/03_ilqp4q.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117430/03_p3nen5.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117414/04_vfuvbt.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117411/04_sd5vse.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117417/06_tjbl69.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117418/07_bzpsu9.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117408/07_odc0fi.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117422/08_vsxmxy.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117422/09_yrawbx.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117424/10_ny3orx.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756116177/10_ex6m9r.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117426/11_pdc0iu.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756117428/12_ojlkxe.jpg",
      ] 
    },
    { 
      title: "Web UI Design", 
      desc: "Building modern, user-friendly interfaces for websites and apps.", 
      img: WebUiGif, 
      samples: [
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756118340/01_il67sn.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756118342/02_i5jpo9.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756118343/03_aflxki.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756118351/05_oa9irr.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756118502/06_i4jauz.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756118506/08_vpagtk.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756118512/10_lgvb0y.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756118508/11_yajzmg.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756118516/12_ktqeyl.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756118506/13_dgjcmu.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756118511/14_vzsqrt.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756118509/15_jgwydr.png"
      ] 
    },
    { 
      title: "Packaging Design", 
      desc: "Designing creative packaging that enhances your product’s appeal.", 
      img: "https://res.cloudinary.com/dxv85euii/image/upload/v1756195416/Packging_Design_a26hxe.gif", 
      samples: [Packging1, Packging2, Packging3, Packging4, Packging5, Packging6, Packging7, Packging8,
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756194959/01_dchmpc.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756194962/02_hsiooj.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756194960/03_crf1on.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756194963/04_qvjctk.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756194963/05_pjlwe4.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756194962/06_uhmzbq.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756194963/07_nh5vw8.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756194962/08_ckrgcr.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756194964/09_mtzkzp.png"
      ] 
    },
    { 
      title: "Social Media Graphics", 
      desc: "Engaging visuals for your social media campaigns.", 
      img: "https://res.cloudinary.com/dxv85euii/image/upload/v1756195511/Social_media_graphic_qqn9g2.gif", 
      samples: [SocialMedia1, SocialMedia2, SocialMedia3, SocialMedia4, SocialMedia5, SocialMedia6, SocialMedia7, SocialMedia8, SocialMedia9] 
    },
    { 
      title: "Merchandise Design", 
      desc: "Engaging visuals for your social media campaigns.", 
      img: "https://res.cloudinary.com/dxv85euii/image/upload/v1756195591/marchandise_kbf2vh.gif", 
      samples: [
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196243/01_t3g9ey.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196243/02_atbq5g.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196244/03_cxpt24.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196249/04_fjtawj.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196250/05_cdywif.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196250/06_rprb6c.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196246/07_zx8tzi.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196247/08_at4eus.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196248/09_wftgla.jpg",
      ] 
    },
    { 
      title: "E-book & Presentation Design", 
      desc: "Engaging visuals for your social media campaigns.", 
      img: "https://res.cloudinary.com/dxv85euii/image/upload/v1756195701/E_book_presention_final_cuvwaa.gif", 
      samples: [
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196831/01_jf4ulr.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196831/02_lryial.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196832/03_a2uzwd.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196837/06_x2ybsi.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196833/05_d4tm0o.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196837/06_x2ybsi.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196839/07_lcbj0r.png",
      ] 
    },
    { 
      title: "Digital Marketing Graphic", 
      desc: "Engaging visuals for your social media campaigns.", 
      img: "https://res.cloudinary.com/dxv85euii/image/upload/v1756195701/Digital_markiting_wvrvkm.gif", 
      samples: [
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196997/01_dafuiq.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196997/02_l6fklj.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196997/03_eehbot.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196999/04_vl3d3i.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196999/05_nn1odj.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756196998/06_kyirll.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756197005/07_qplhss.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756197006/08_lt4gki.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756197007/09_xwgxta.png",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756197011/10_tlyaek.png",
      ] 
    },
    { 
      title: "Typography & Custom arts", 
      desc: "Engaging visuals for your social media campaigns.", 
      img: "https://res.cloudinary.com/dxv85euii/image/upload/v1756195701/Typography_Custom_Arts_jho8vz.gif", 
      samples: [
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756197125/02_dpee20.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756197128/03_g80pcf.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756197130/04_nrypj6.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756197132/05_hfvuct.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756197134/06_defp9z.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756197136/07_elfurs.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756197137/08_lfu4hl.jpg",
        "https://res.cloudinary.com/dxv85euii/image/upload/v1756197140/09_bumw2m.jpg",

      ] 
    },
  ], []);

  const openModal = useCallback((service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedService(null);
  }, []);

  return (
    <div className="p-6">
      <section className="text-center py-12 fade-in">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">
          Graphic Designing Services
        </h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Transforming your ideas into visually captivating designs that tell your brand story.
        </p>
      </section>

      <section className="py-16 slide-in-left">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">
            Our Graphic Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-slate-700">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(service)}
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  loading="lazy" 
                  className="w-full h-auto object-cover rounded-md mb-4" 
                />
                <strong>{service.title}</strong>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 fade-in">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="flex justify-center mb-6">
            <img
              src={graphicDesignVideo}
              alt="Digital Marketing"
              className="w-full max-w-3xl h-80 object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Dominate your industry with high-converting digital strategies that bring measurable results.
          </p>
        </div>
      </section>

      <section className="py-16 text-center fade-in">
        <h2 className="text-4xl font-bold text-slate-700 mb-6">
          Let's Elevate Your Brand Together
        </h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Our team of digital marketing pros is ready to skyrocket your brand’s online presence. Let’s create a strategy that gets real results!
        </p>
        <Button
          text="Get Started Now"
          onClick={() => (window.location.href = "/contact")}
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        />
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedService?.title}
        samples={selectedService?.samples || []}
      />
    </div>
  );
}
