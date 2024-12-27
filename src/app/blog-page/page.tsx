export default function BlogInnerPage() {
    return (


       <>
        <div className="relative bg-[#FF4F5A] text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Title</h1>
         n
        </div>
      </div>

      <main className="mt-10 news-card" style={{ transform: "translate(0px, 0px)", opacity: 1 }}>
        {/* Hero Section */}
        <div className="mb-4 md:mb-0 w-full max-w-screen-xl mx-auto relative" style={{ height: "24em" }}>
          {/* Gradient Overlay */}
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10 rounded-lg"
            style={{ backgroundImage: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))" }}
          ></div>
  
          {/* Background Image */}
          <img
            src="/assets/img/news-images/dec-20-news-1.jpg"
            alt="Kerala to Launch ‘Year of Investments’ After Global Summit: Minister P. Rajeeve"
            className="absolute left-0 top-0 w-full h-full z-0 object-cover object-top rounded-lg"
          />
  
          {/* Content */}
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <div className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
              20th December 2024
            </div>
            <h2 className="text-[20px] md:text-4xl font-semibold text-gray-100 leading-tight">
              Kerala to Launch ‘Year of Investments’ After Global Summit: Minister P. Rajeeve
            </h2>
          </div>
        </div>
  
        {/* Article Content */}
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-xl mx-auto text-lg leading-relaxed">
          <p className="text-base font-normal text-left text-[#3C4242] mb-[20px]">
            Kerala will launch the ‘Year of Investments’ initiative in 2025, focusing on ventures that leverage the state’s
            skilled workforce and thriving Startup ecosystem, Minister for Industries, P. Rajeeve, announced at the
            Startup Conclave. The event, organized by KSIDC, served as a precursor to the Invest Kerala Global Summit
            (IKGS) 2025, scheduled for February 21-22 in Kochi.
          </p>
          <p className="text-base font-normal text-left text-[#3C4242] mb-[20px]">
            Dr. Rathan U. Kelkar, Secretary, Electronics & IT, presented the concept of an Emerging Technology Hub (ETH)
            focusing on space tech, agritech, healthtech, energy, and AVGC-XR.
          </p>
          <p className="text-base font-normal text-left text-[#3C4242] mb-[20px]">
            S. Harikishore, Managing Director, KSIDC, stated that 200 startups will be invited to the summit. “KSIDC
            gathers feedback to strengthen the startup ecosystem and foster collaborations among startups and
            stakeholders. The scaling up support for startups will be by way of redeemable cumulative preference share
            capital investment,” he said.
          </p>
          <p className="text-base font-normal text-left text-[#3C4242] mb-[20px]">
            The event featured panel discussions and sessions with prominent leaders, including Sandith Thandasherry
            (NavAlt Solar), Dr. Lini Alexander (Bylin Medtech), Devan Chandrasekharan (Fuselage Innovations), and Mohammed
            Jamsheer (Green Worms Waste Management), moderated by Hari Krishnan R., Executive Director, KSIDC. Anoop
            Ambika, CEO, KSUM, welcomed attendees, while Santhosh Koshy Thomas, MD, KINFRA, offered felicitations.
            Additional sessions included insights from Satyajeet Rajan, former additional CEO, KIIFB, Premnath
            Ravindranath, Executive Director, KFC & Vote of Thanks was delivered by Vishnuraj P, OSD. The conclave builds
            momentum for IKGS 2025.
          </p>
        </div>
      </main></>
    );
  }
  