
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="px-8 lg:px-16 pt-16 pb-32">
       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h1 className="text-6xl md:text-8xl font-display tracking-tighter mb-12">GET IN<br />TOUCH</h1>
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 mb-4">Enquiries</h4>
                <p className="text-lg">studio@ojclothing.com</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 mb-4">Studio Address</h4>
                <p className="text-lg leading-relaxed">
                  Calle de la Plata 14<br />
                  Madrid, ES 28014
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 mb-4">Socials</h4>
                <div className="flex space-x-8 mt-2">
                  <a href="#" className="text-[11px] font-bold uppercase tracking-widest hover:underline">Instagram</a>
                  <a href="#" className="text-[11px] font-bold uppercase tracking-widest hover:underline">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 border border-neutral-100">
             <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-400">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-400">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" 
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-400">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none" 
                    placeholder="How can we help?"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-neutral-800 transition-colors"
                >
                  Send Enquiry
                </button>
             </form>
          </div>
       </div>
    </div>
  );
};

export default Contact;
