import React from 'react'
import { useState } from 'react';
const Traning = () => {
  const [status, setStatus] = useState(false);
  return <>

    <div class="body-right">

      {
        !status && (
          <div class="content_doc">
            <p class="pclass"><b>Training
              and Orientation:</b></p><br /><br />
            <p class="pclass"><b>1. Short-term In-service Courses:</b><br />
              <b>W</b>ith necessary amendment In the Act of 19:h, the Board is now the sole authority
              to conduct all sorts of training at the primary education level. The important
              training programmes that have recently been conducted by the Board are
              enumerated below:<br /><br />
              <b>Orientation of teachers in Teaching Science</b> deserves in this
              connection special mention. A training module in sets has
              been meticulously developed by the experts basically incorporating
              into it activity based methods for teaching-learning science
              with low cost or no-cost materials that are easily available
              in the locality. A cascadecum-concentric model has been
              strictly adhered to. A large number of teachers have so
              far been trained.<br />
              It may be mentioned in this connection that the effort on the
              part of the Board to introduce improved method of science
              teaching through activity-based module is unique in nature
              and has drawn wide admiration from the NCERT, the joint
              Review Mission of DFID which visited us earlier and the
              UNICEF. The programme created immense enthusiasm and curiosity
              amongst students, teachers, guardians, educationists and
              public in general.<br />
              For making a study of the impact of the training/orientation
              already implemented the Board is also thinking to involve
              trusted organizations for monitoring and feedback. Distribution
              of science kits also seems to be indispensable.<br /><br />
              <b>English Orientation Programme & preparation of English Text Books</b><br />
              Following
              the recommendations of Pabitra Sarkar Committee for teaching English as
              second language at the primary level from the second semester of Class
              II and acting upon the order of the School Education Department, Government
              of West Bengal, the West Bengal Board of Primary Education introduced
              the study of English in the year 1999. Thereafter, in 2000-2001, a massive
              Orientation Programme was conducted by the Board for providing training
              to more than one lakh primary teachers with the emphasis on the learner's
              empowerment. In continuation of the previous programme, further initiative
              was taken by the Board during 2003 in collaboration with the British Council
              and the English Language Teaching (ELT) experts of our state, i.e, the
              Institute of English, Kolkata and from other organizations to make the
              teaching-learning process more effective by empowering the primary teachers
              so that they may teach English successfully with emphasis on teacher-talk
              device that may be instrumental to encourage the learners by reciprocating
              with desired answer.<br />
              With that purpose in view the WBBPE arranged for a two-day English Orientation
              Programme with the ELT experts from British Council and from our State
              in April 2003 at the AIKATAN COMPLEX Salt Lake City, Kolkata.<br />
              The Master Resource Persons discussed in great details the possibilities for
              exploring specific areas in the text books where teacher-talk could be
              developed. Following this, a massive training programme was taken up with
              the warm co-operation and assistance from the British Council Division,
              Kolkata. The programme was conducted at three phases:<br />
              i) School visit from 10.09.2003 to 13.09.2003;<br />
              ii) Development of training materials from 14.09.2003 to 19.09.2203 and<br />
              iii) Training of the Key Resource Persons from 20.09.2003 to 27.09.2003.<br /><br />
              All through this programme, Dr. George Raymond Mackay, the noted ELT Expert
              from the British Council worked along with other State Experts, conducting
              very effectively the entire schedule of training in which 75 KRPs took
              part from all the districts of our State.</p>
            <p className='more' onClick={() => setStatus(!status)}><b><u>{!status && 'more...'}</u></b></p>



          </div>
        )
      }

      {
        status && (
          <div class="content_doc">
          <p class="pclass"><b>Orientation 
              of KRPs in teaching English as Second Language</b><br /><br />
          As the follow-up action of this training programme, the teaching-learning 
          materials developed in the workshop were further developed for the preparation 
          of a Training Module at the Board's initiative. A series of meetings were 
          held with MRPs to give effect to this purpose keeping an eye on the teacher-talk 
          section. The module has been prepared and printed both in Bengali and 
          Hindi versions and the copies have been collected by all the District 
          Primary School Councils.<br />
          Thereafter,massive training programmes have been held in as 17 (Seventeen) Districts 
          and approximately one lakh primary teachers have been trained through 
          the cascade cum concentric mode in which about 400 KRPs and 1000 RPs from 
          each District acted as trainers. The training of the large number of primary 
          teachers all over the State has been completed. We are now planning for 
          launching fresh programme for receiving the feedback from the grass root 
          level of the Districts Primary School Council in this regard. We also 
          undertook a key Resource Person Development Programme at the end of October 
          2005 in the premises of the Board Office for updating the skill of the 
          Key Resource Persons for the forthcoming training programmes.<br />
          Another development programme has also been taken up in respect of revising the 
          syllabuses for English language upto Class V. As directed by the Govt. 
          of West Bengal English being introduced from Class I from 2004, the text 
          books of English for Classes I, II and III have been prepared and handed 
          over to the Textbooks Section of Directorate of School Education, Government 
          of West Bengal. The manuscript have been printed and the copies have reached 
          all the District Primary School Councils for distribution amongst the 
          students in time.<br />
          The Board is expected soon to arrange for taking up the task for developing 
          all the text books for Classes IV and V in the context of the changed 
          scenario in education and in accordance with the revised curriculum and 
          syllabuses for Primary Section with an emphasis on the development of 
          the competency of the learners in using English through the communicative 
          mode in the class room situationsand in practical situations outside the 
          classroom.<br /><br />
          <b>SCHOOL HEALTH PROGRAMME: ORIENTATION PROGRAMME</b><br />
          The West Bengal Board of Primary Education in collaboration 
          with the Department of Health & Family Welfare, Government 
          of West Bengal has launched a massive school health programme 
          (consisting of both physical and mental health components) 
          to promote health consciousness and to imbibe in student 
          the culture of good habits for healthy living. The basic 
          components of the programme are as follows:<br /><br />
          * Orientation of Teachers and other stakeholders<br />
          * Organization of Health check-up Camps for the students and<br />
          * Establishment of the liaison between the teachers and guardians/parents 
          and hospitals and NGOs working in the area thus community mobilization 
          towards health education<br />
          * Distribution of Medical Kit and First Aid Box among the schools.<br />
          A carefully developed Health Education Module through successive 
          workshops has been distributed among the District Primary 
          School Councils. In the inaugural progamme held on the 3rd 
          and 4th November, 2003 Shri Kanti Biswas, Hon'ble Minister-in-charge, 
          School Education, Government of West Bengal, Shri Surya 
          Kanta Mishra, Hon'ble Minister-in-charge, Health & Family 
          Welfare, Govt. of West Bengal, Shri Protyush Mukhopadhyay, 
          Hon'ble Minister of State, Health & Family Welfare, 
          Govt. of West Bengal and Smt. Eva De, Hon'ble Minister of 
          State, School Education, Govt. of West Bengal graced the 
          occasion. Subsequently four workshops each of 5-day duration 
          were held in January-March, 2004 in four zones involving 
          personnel from all the districts for preparation Key Resource 
          Persons. In the districts 25 camps each consisting of 50 
          teachers have so far been completed in the districts.<br />
          <b>The European Commission's Support</b><br />
          The novelty and utility of this type of progrmme impressed the 
          European Commission and they came forward under the Sector 
          Investment Programme with necessary fund for supporting 
          the implementation of the programme.</p>
              
          
          </div>
        )
      }

    </div>
  </>
}

export default Traning

