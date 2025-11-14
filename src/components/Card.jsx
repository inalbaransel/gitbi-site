

function Card() {




    const items = [
        { 
            title: "Amacımızla İlerliyoruz",
            description: "Teknolojinin, kullanıcı deneyimini önemli ölçüde iyileştirebileceğine inanıyoruz. Bu vizyonla; empati, niyet ve uzmanlıkla geliştirdiğimiz çözümlerin, geniş kitlelerin hayatına değer katacağını biliyoruz.",
            image: `<svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#000000"><path d="M440-40v-167l-44 43-56-56 140-140 140 140-56 56-44-43v167h-80ZM220-340l-56-56 43-44H40v-80h167l-43-44 56-56 140 140-140 140Zm520 0L600-480l140-140 56 56-43 44h167v80H753l43 44-56 56Zm-260-80q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm0-180L340-740l56-56 44 43v-167h80v167l44-43 56 56-140 140Z"/></svg>`
        },
        { 
            title: "Özel Yazılım Ürünleri", 
            description: "Bir ihtiyacı belirliyor ve ona özel çözüm geliştiriyoruz. Sahip olduğumuz tescilli teknolojimiz; mevcut sistemlerinizle entegre edilebilir, lisanslanabilir veya tamamen sizin gereksinimlerinize göre özelleştirilebilir.",
            image: `<svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#000000"><path d="M240-100q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 22-6.5 42.5T354-159v-27q30 13 62 19.5t64 6.5q134 0 227-93t93-227h80q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-45 0-88-9.5T309-118q-16 9-33.5 13.5T240-100Zm0-80q25 0 42.5-17.5T300-240q0-25-17.5-42.5T240-300q-25 0-42.5 17.5T180-240q0 25 17.5 42.5T240-180Zm240-160q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41ZM80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q45 0 88 9.5t83 28.5q16-9 33.5-13.5T720-860q58 0 99 41t41 99q0 58-41 99t-99 41q-58 0-99-41t-41-99q0-22 6.5-42.5T606-801v27q-30-13-62-19.5t-64-6.5q-134 0-227 93t-93 227H80Zm640-180q25 0 42.5-17.5T780-720q0-25-17.5-42.5T720-780q-25 0-42.5 17.5T660-720q0 25 17.5 42.5T720-660ZM240-240Zm480-480Z"/></svg>`
        },
        { 
            title: "İş Birlikleri",
            description: "Vizyonu bizimle örtüşen teknoloji sağlayıcıları, yazılım şirketleri ve yenilikçi kuruluşlarla ortaklık kuruyoruz. Böylece özel çözümler ve ileri teknoloji geliştirebiliyoruz.",
            image: `<svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#000000"><path d="M480-600 340-740l140-140 140 140-140 140ZM40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm120-280q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440Z"/></svg>`
        },
        { 
            title: "Güvenlik & Uyum",
            description: "Geliştirdiğimiz çözümlerde güvenlik en büyük önceliğimiz. Hem teknolojinin tüm karmaşıklığını yönetiyor hem de yasal gereksinimlere ve veri koruma standartlarına tam uyum sağlıyoruz.",
            image: `<svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#000000"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm0-80q100 0 170-70t70-170q0-17-2.5-33.5T710-546q-15 3-30 4.5t-30 1.5q-63 0-120-24t-102-70q-28 57-77 99t-111 61q3 98 72.5 166T480-240ZM256-566q44-23 67-53.5t45-72.5q-38 20-67 52.5T256-566Zm124 166q-17 0-28.5-11.5T340-440q0-17 11.5-28.5T380-480q17 0 28.5 11.5T420-440q0 17-11.5 28.5T380-400Zm270-220h12q6 0 12-1-33-45-83.5-72T480-720h-12q-6 0-11 1 39 45 82.5 72T650-620Zm-70 220q-17 0-28.5-11.5T540-440q0-17 11.5-28.5T580-480q17 0 28.5 11.5T620-440q0 17-11.5 28.5T580-400ZM40-720v-120q0-33 23.5-56.5T120-920h120v80H120v120H40ZM240-40H120q-33 0-56.5-23.5T40-120v-120h80v120h120v80Zm480 0v-80h120v-120h80v120q0 33-23.5 56.5T840-40H720Zm120-680v-120H720v-80h120q33 0 56.5 23.5T920-840v120h-80Zm-383 1Zm-89 27Z"/></svg>`
        },
    ]

  return (
        <div className="card-container flex sm:flex-col gap-10 mt-20">
            {items.map((item, index) => {
                return (
                    <div key={index} className="card min-w-[40vh] sm:w-[30vw] sm:flex items-center gap-6
                    border-[1px] border-[--black]  py-8 px-8 ">
                        <div className="rightdata w-[10vh] h-[10vh] sm:w-[28vh]  sm:h-[10vh] "
                            dangerouslySetInnerHTML={{ __html: item.image }}/>
                        <div className=" font-[Sansita]  leftdata">
                            <h1 key={index} className="text-[3vh] font-bold whitespace-nowrap sm:text-[2.8vh] sm:font-bold mb-2">{item.title}</h1>
                            <p className="text-[2.2vh]  sm:text-[2vh] font-medium">{item.description}</p>
                        </div>                       
                    </div>
                )
            })} 
        </div>
    )
}

export default Card


