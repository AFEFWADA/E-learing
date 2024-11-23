import React from 'react';
import CourseCard from '../CourseCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function Table3() {
  const courses = [
    {
      image: 'https://th.bing.com/th/id/OIP.PJD8BVsmxINfvnK2C1TuNAHaE-?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
      title: 'Introduction to Web Development',
      instructor: 'Jane Doe',
      rating: '4.8 (1200)',
      price: '29.99 $US',
      bestSeller: true,
    },
    {
      image: 'data:image/jpeg;base64,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', 
      title: 'Advanced JavaScript and Frameworks',
      instructor: 'John Smith',
      rating: '4.7 (980)',
      price: '39.99 $US',
      bestSeller: true,
    },
    {
      image: 'https://th.bing.com/th/id/OIP.rr8uFBZjhD5veq4YyNaOFgHaD4?w=341&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
      title: 'Full-Stack Web Development Bootcamp',
      instructor: 'Emily Johnson',
      rating: '4.9 (1500)',
      price: '49.99 $US',
      bestSeller: false,
    },
    {
      image: 'https://th.bing.com/th/id/OIP.GYFBEQ2f5xXt2EGz85jDIwHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
      title: 'Programmation Orientée Objet en Java',
      instructor: 'Emily Johnson',
      rating: '4.9 (1500)',
      price: '49.99 $US',
      bestSeller: true,
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' ,cursor: 'pointer'}}>
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
}

export default Table3;
