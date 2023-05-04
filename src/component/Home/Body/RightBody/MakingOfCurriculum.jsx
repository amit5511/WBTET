import React from 'react'
import { useState } from 'react';
const MakingOfCurriculum = () => {
  const [status,setStatus]=useState(false);
  return <>
  
  <div class="body-right">
        
    {
      !status&&(
        <div class="content_doc">
    <p class="pclass"><b>Making of the Curriculum and Materials</b></p><br /><br />
    <p class="pclass"><b>Revision,Modernization and Renewal of Curriculum and syllabuses</b><br /><br />
    After a lapse of some 23 years it became an imperative for the Board to undertake 
    the task of renewal/revision/modernization of the curriculum and syllabuses 
    introduced as early as in 1981.<br /><br />
    <b>The need for changes:</b><br /><br/>
    The change in socio-political and socio-economic condition, rapid advancement 
    of science and technology, changes in the national and international scenario, 
    particularly in the world of education (reference may be made for example, 
    to the Dakar Framework for Action, Delor's Commission etc.) and introduction 
    of English as per recommendations of the Pabitra Sarkar Committee from 
    the second semester of Class II called for renewal and modernization of 
    the existing curriculum and syllabuses. This challenge was meticulously 
    and efficiently met by the Board. Subject Expert groups were formed. Members 
    of each group thoroughly discussed the pros and cons of the existing curriculum 
    and syllabuses and incorporated the necessary changes into it. Suggestions 
    were collected from large number of teachers and experts who participated 
    in the workshops.<br /><br />
    <b>The Basic Features:</b><br /><br />
    In the renewed curriculum and Syllabuses along with the contents, hints on 
    the mode of classroom transaction with emphasis on activity-based and 
    participatory group learning (Peer Learning) have been incorporated into 
    and more about writing textbooks and guidebooks, workbooks particularly 
    for co-scholastic subjects have been given.<br /><br />
    * Competencies to be attained by the learners from the lessons have been 
    identified and clearly mentioned in the beginning of each lesson of all 
    text books.<br />
    * Exercises have been elaborately given not only to promote self-learning 
    but also to facilitate the conduct of evaluation - instant (Sub-Unit based), 
    Unit Based, Periodic and summative; sample evaluation sheets have been 
    given to facilitate the mode of implementation.<br />
    * Exercises have been designed in a way that the competencies identified 
    earlier, have been acquired through teaching learning of the specific 
    lesson.<br />
    * Views and opinions of erudite persons in the field of education and more 
    than one lakh teachers participating in different orientation programmes 
    were also given importance to.<br />
    * Special emphasis has been given on value education and values that are 
    inherent in the lessons have been identified and mentioned. A separate 
    chapter has been added to incorporate into the basics of value education. 
    But no separate book has been prepared for this purpose.<br />
    * A separate chapter has also been added to impress upon the clientele, 
    the teachers, the basics of continuous and comprehensive evaluation.<br />
    * Another separate chapter has been given on the method of teaching-learning 
    and methodology of preparing text books.<br />
    * With a view to promoting health and environmental consciousness special 
    emphasis has been given in this regard in the curriculum.<br />
    * Special attention has been paid to imbibe in the curriculum the basic 
    spirit that the four pillars of learning as referred to in the International 
    Commission on Education for the 2151 Century (Delors Commission, UNESCO). 
    Basic educational thoughts of our great thinkers such as Ram Mohan Roy, 
    Vidyasagar, Rabindranath Tagore, Mahatma Gandhi, Swami Vivekananda, Shri 
    Aurobinda and others have also been kept in mind while giving a shape 
    to the curriculum.<br />
    * The update NCERT curriculum and other reports of different Commissions, 
    Committees etc. were taken into consideration before giving shape to the 
    renewed curriculum.<br />
    The renewed curriculum has been be introduced from the current session, i.e., 
    the session of 2004-2005.<br /></p>
    <p className='more' onClick={()=>setStatus(!status)}><b><u>{!status&&'more...'}</u></b></p>

    

    </div>
      )
    }

    {
      status&&(
        <div class="content_doc">

        <p class="pclass"><b>The new era in development of Materials, Renewal of Textbooks and Preparation 
        of Teachers' Guidebooks:</b><br />
        Along with the introduction of renewed and modernized curriculum and syllabuses 
        the need for improved version of the existing textbooks and teachers' 
        guidebooks has been felt urgent. the process of development of the textbooks 
        was carried out keeping in mind the basic features to be incorporated 
        into.The textbooks with clearly identified learner's competencies for 
        each lesson and with elaborate exercises to promote self-learning have 
        been so developed through workshops/group meetings with support from West 
        Bengal District Primary Education Programme and Paschim Banga Rajya Prarambhik 
        Siksha Unnayan Sanstha so as to conform to the latest trends and developments, 
        social, scientific, economic, political that are conducive to the healthy 
        grown of the learners as responsible good citizens of future India. All 
        efforts have been made to promote the sense of gender equity and equality, 
        national integration, communal harmony, scientific outlook, human rights, 
        love for animals, self consciousness of the children with special need, 
        preservation of pollution-free environment, basic human values, anti-war 
        attitude and discarding childlabour, ill-feeling towards others, hunting 
        etc. through textual matters.It may be noted in this connection that textbooks 
        are published in Bengali, Hindi, Urdu, Nepali and Santali (Olchiki) to 
        cater to the needs of the various language communities residing in West 
        Bengal. As effective measure for quality improvement Teachers' Guidebooks, 
        Workbook-cum-Evaluation sheets have been developed and are being developed 
        respectively for wider diffusion. The table below shows the subject-wise 
        textbooks that the West Bengal Board of Primary Education has developed:</p><br />
    
    
    <table border="1" cellpadding="0" cellspacing="0">
    <tr>
    <td width="22"><p class="pclass">Sl No</p></td>
    <td width="130"><p class="pclass">Subject</p></td>
    <td width="75"><p class="pclass">Total No. for I to V (one for each class)</p></td>
    <td width="185"><p class="pclass">Languages [Bengali, Hindi, Urdu, Nepali, Santali (Olchiki*)]</p></td>
    </tr>

    <tr>
    <td rowspan="3"><p class="pclass">1</p></td>
    <td><p class="pclass"><b>Literacy</b></p></td>
    <td>&nbsp;</td>
    <td><p class="pclass">5</p></td>
    </tr>

    <tr>
    <td><p class="pclass">i) First Language</p></td>
    <td><p class="pclass">5</p></td>
    </tr>

    <tr>
    <td><p class="pclass">ii) Second Language</p></td>
    <td><p class="pclass">5</p></td>
    </tr>

    <tr>
    <td><p class="pclass">2</p></td>
    <td><p class="pclass">Numeracy</p></td>
    <td><p class="pclass">5</p></td>
    <td><p class="pclass">5</p></td>
    </tr>

    <tr> 
        <td rowspan="4"><p class="pclass">3</p></td>
        <td><p class="pclass"><b>EVS# for Class III to V</b></p></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>

    <tr> 
        <td><p class="pclass">i) History</p></td>
        <td><p class="pclass">3</p></td>
        <td><p class="pclass">5</p></td>
    </tr>

    <tr> 
        <td><p class="pclass">ii) Geography</p></td>
        <td><p class="pclass">3</p></td>
        <td><p class="pclass">5</p></td>
    </tr>

    <tr> 
        <td><p class="pclass">iii) Natural Science</p></td>
        <td><p class="pclass">3</p></td>
        <td><p class="pclass">5</p></td>
    </tr>

    <tr> 
        <td colspan="4">&nbsp;</td>
    </tr>
    
    </table>
    <br />

    <p class="pclass"># No textbooks for Class I & II: There is separate Guidebook for the 
        teachers.<br />
    * In the process.<br />
    <b>A</b>programme of periodic renewal/revision of Textbooks as necessary are strictly 
    adhered to.Manuscripts are prepared by the West Bengal Board of Primary 
    Education and the onus of printing and distribution lies with the Directorate 
    of School Education, West Bengal. These manuscripts are handed over to 
    School Education Directorate, West Bengal for publication and distribution. 
    Students get the books free of costs. Every year a Book Day is observed 
    and the distribution of the Textbooks is launched on that day. Modules 
    for guidance of teachers have been developed through concerted efforts 
    ofW.B.Board of Primary Education, W.B. District Primary Education Programme 
    and Paschim Banga Rajya Prarambhik Siksha Unnayan Sanstha and printed 
    and published by the Board. Workbooks for Co-scholastic subjects like 
    works on Direct Experience and Creative and Productive Works have meanwhile 
    been developed similarly.Some of the important modules (Sikshak Prasikshan 
    Sambhar) recently published in the following areas deserve mention:<br /><br />
    1.Primary School Health Programme<br />
    2.Teaching of English as Second Language<br />
    3.Direct Experience, Creative and Productive Works<br />
    4. Science Teaching (Activity-based)<br />
    5. Mulyan Nirdeshika (Revised)<br />
    6. Primary School Sanitation and Hygiene Education:<br />
    A module for SensitizationWith the introduction of English from Class 
    I as per recent decision of the Government textbooks have been meticulously 
    developed by Group of Experts and the textbook for Class II has also been 
    revised and renewed. This is being used from the academic session 2005-2006</p>

    
    
    
    </div>
      )
    }

    </div>
  </>
}

export default MakingOfCurriculum