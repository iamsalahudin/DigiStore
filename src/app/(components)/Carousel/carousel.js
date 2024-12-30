import React from 'react';
export default function Page() {
    return (
        <div style={{ width: '600px', margin: 'auto', height:'400px' }}>
            <Carousel>
                <div>
                    <img src="https://preview.redd.it/haeyjbjnb9541.jpg?auto=webp&s=9167de3259cd3d1bc25a02d3e5e9c67af7840277" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/gradient-abstract-background-with-different-shapes_23-2149110297.jpg" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNkAgg5E8TZuRMFVSnvbfF1jcRYacTxm1Mw&s" alt="Slide 3" />
                </div>
            </Carousel>
        </div>
    );
}
 
