import React from 'react';

export default function Footer() {
  return (
      <footer className="footer fixed-bottom text-center p-3">
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='https://git.generalassemb.ly/nicholasgacicia/YEMStats-App'>
          I Was @ That Show <i class="united states flag"></i>
        </a>
      </footer>
  );
}
