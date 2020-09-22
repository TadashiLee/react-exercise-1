import React, { Component } from 'react';
import '../styles/education.scss';
class Education extends Component {
  render() {
    return (
      <div className="education">
        <h3>EDUCATION</h3>
        <div className="yeardiv">
          <div className="educationp">
            <p>1990</p>
          </div>
          <div className="licss">
            <p>I was born in Katowice</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente, exercitationem, totam, dolores iste dolore est aut modi.
            </p>
          </div>
        </div>
        <div className="yeardiv">
          <div className="educationp">
            <p>2005</p>
          </div>
          <div className="licss">
            <p>Secondary school specializing in artistic</p>
            <p>
              Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum
              ducimus quibusdam quis voluptatibus.
            </p>
          </div>
        </div>
        <div className="yeardiv">
          <div className="educationp">
            <p>2009</p>
          </div>
          <div className="licss">
            <p>First level graduation in Graphic Design</p>
            <p>
              Aspermatur, molitia, quos maxime eius suscipit sed beatae ducimus
              quaerat quibusdam perferendis? lusto, quibusdam asperiores unde
              repellat.
            </p>
          </div>
        </div>
        <div className="yeardiv">
          <div className="educationp">
            <p>2012</p>
          </div>
          <div className="licss">
            <p>Second level graduation in Graphic Design</p>
            <p>Ducimus, aliquam tempore autem itaque et accusantium!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
