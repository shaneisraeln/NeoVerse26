import { Brain, ExternalLink } from 'lucide-react';

export default function TracksSection() {
  const handleClick = () => {
    window.open('https://docs.google.com/document/d/1my4tsLX94w6wJSZrvuPmQW6YrStCBr32RirvmmxGRzE/edit?usp=sharing', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Problem Statement
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-[450px] max-w-[450px] aspect-square bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-8 hover:border-purple-400/80 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)] flex-shrink-0">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                AI Agents
              </h3>
            </div>
            
            <p className="text-base text-purple-100 leading-relaxed mb-8 flex-1">
              Innovate in real-world AI agent systems, with challenges especially given by <span className="font-bold text-blue-300">SurveySparrow</span>. Build solutions for intelligent automation, conversational AI, task orchestration, or multi-agent collaboration to improve efficiency and resilience.
            </p>
            
            <button
              onClick={handleClick}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-300"
            >
              View Problem Statement
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
