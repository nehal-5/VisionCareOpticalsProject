import React, { useState, useRef, useEffect } from 'react';
import '../styles/Blogs.css';

const blogData = [
  {
    id: 'modal1',
    title: '5 Essential Eye Care Tips',
    image: '/assets/BlogImages/eyeCareTips.png',
    desc: 'Discover simple ways to maintain healthy eyesight.',
    fullText:
      'Get regular eye checkups, follow the 20-20-20 rule, wear sunglasses outside, avoid excessive screen time, and eat eye-friendly foods rich in Vitamin A and Omega-3.'
  },
  {
    id: 'modal2',
    title: 'How to Choose the Right Lenses',
    image: '/assets/BlogImages/eyeImagesColor.png',
    desc: 'Find the perfect lenses that match your lifestyle.',
    fullText:
      'Pick lenses based on your daily routine, lighting environment, prescription, and personal style. Consider anti-glare and photochromic lenses for all-day comfort.'
  },
  {
    id: 'modal3',
    title: 'Protecting Your Eyes from Digital Screens',
    image: '/assets/BlogImages/digitalScreen.png',
    desc: 'Reduce eye strain from screens with these tips.',
    fullText:
      'Take breaks every 20 minutes, blink often, use blue light filters, maintain a proper screen distance, and adjust screen brightness to reduce digital eye strain.'
  }
];

const Blogs = () => {
  const [activeModal, setActiveModal] = useState(null);
  const modalRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActiveModal(null);
      }
    };

    if (activeModal) {
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      window.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeModal]);

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <section id="blog">
      <h2>Eye Care Guides & Tips</h2>
      <p>Learn about eye health, choosing the right eyewear, and more.</p>

      <div className="blog-container">
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <button className="read-more" onClick={() => openModal(blog.id)}>
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {blogData.map(
        (blog) =>
          activeModal === blog.id && (
            <div className="modal" key={blog.id}>
              <div className="modal-content" ref={modalRef}>
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <h3>{blog.title}</h3>
                <p>{blog.fullText}</p>
              </div>
            </div>
          )
      )}
    </section>
  );
};

export default Blogs;
