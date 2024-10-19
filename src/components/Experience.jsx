import React from 'react'
import { TiTick } from 'react-icons/ti';
import './Experience.css';

const Experience = () => {
  return (
    <div id="experience">
      <h2>
        Skills
      </h2>
      <div className='experience_content'>
        <article className="card">
          <TiTick />
          <h4>
            HTML
          </h4>
          
        </article><article className="card"><TiTick />
          <h4>
            CSS
          </h4>
          
        </article><article className="card"><TiTick />
          <h4>
            JS
          </h4>
          
        </article><article className="card"><TiTick />
          <h4>
            React
          </h4>
         
        </article><article className="card"><TiTick />
          <h4>
            NodeJS
          </h4>
          
        </article><article className="card"><TiTick />
          <h4>
            C++
          </h4>
         
        </article><article className="card"><TiTick />
          <h4>
            DSA
          </h4>
          
        </article>
      </div>
    </div>
  )
}

export default Experience
