import React from 'react';

export default function SantaliPage() {
  return (
    <div style={{
      backgroundColor: '#c4e0c7', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      width: '100%',
      minHeight: '100vh',
      boxSizing: 'border-box', 
      overflow: 'hidden' 
    }}>
     
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '60px',
        textAlign: 'center',
        color: 'black'
      }}>
        Santali (संताली / ᱥᱟᱱᱛᱟᱞᱤ)
      </h1>

      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        maxWidth: '100%', 
        margin: '0 auto'
      }}>
       
        <div style={{
          backgroundColor: '#b5d2c1',
          borderRadius: '16px',
          padding: '32px 24px',
          position: 'relative',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
          borderLeft: '6px solid #9D6C46'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '20px',
            paddingLeft: '8px',
            color: '#333333'
          }}>Santali language</h2>
          <p style={{
            color: '#444444',
            lineHeight: '1.6',
            fontSize: '1.1rem',
            paddingLeft: '8px'
          }}>
            Santali is a Kherwarian Munda language spoken by the Santal people across eastern India and neighboring countries. With ~7.6 million speakers, it's the most widely spoken Munda language and officially recognized in India. It uses the Ol Chiki script, developed in 1925 by Raghunath Murmu.
          </p>
        </div>

        
        <div style={{
          backgroundColor: '#b5d2c1',
          borderRadius: '16px',
          padding: '32px 24px',
          position: 'relative',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
          borderLeft: '6px solid #9D6C46'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '20px',
            paddingLeft: '8px',
            color: '#333333'
          }}>History</h2>
          <p style={{
            color: '#444444',
            lineHeight: '1.6',
            fontSize: '1.1rem',
            paddingLeft: '8px'
          }}>
            Santali, originally an oral language, was first documented in the 19th century using Bengali, Odia, and Roman scripts by European scholars. The Ol Chiki script was developed by Raghunath Murmu in 1925 and is now the official script in parts of India. In 2013, Santali was included in India's National Eligibility Test, boosting its academic recognition.
          </p>
        </div>

        
        <div style={{
          backgroundColor: '#b5d2c1',
          borderRadius: '16px',
          padding: '32px 24px',
          position: 'relative',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
          borderLeft: '6px solid #9D6C46'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '20px',
            paddingLeft: '8px',
            color: '#333333'
          }}>Geographic distribution</h2>
          <p style={{
            color: '#444444',
            lineHeight: '1.6',
            fontSize: '1.1rem',
            paddingLeft: '8px'
          }}>
            Santali is spoken by over 7 million people across India, Bangladesh, Bhutan, and Nepal, with the highest concentrations in Jharkhand, West Bengal, and Odisha. Smaller speaker communities are spread across Assam, Bihar, and northeastern states, with pockets in Bangladesh and Nepal.
          </p>
        </div>

        
        <div style={{
          backgroundColor: '#b5d2c1',
          borderRadius: '16px',
          padding: '32px 24px',
          position: 'relative',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
          borderLeft: '6px solid #9D6C46'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '20px',
            paddingLeft: '8px',
            color: '#333333'
          }}>Written Santali</h2>
          <p style={{
            color: '#444444',
            lineHeight: '1.6',
            fontSize: '1.1rem',
            paddingLeft: '8px'
          }}>
            There are ways to write Santali with the Odia, Bengali, Devanagari and Latin alphabets. It also has its own native script known as Ol Chiki. The Devanagari alphabet is used in Nepal. The Latin alphabet for Santali was devised by by Paul Olaf Bodding (1865-1938)
          </p>
        </div>
      </div>
    </div>
  );
};