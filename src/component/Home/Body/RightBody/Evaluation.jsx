import React from 'react'
import { useState } from 'react';
const Evaluation = () => {
  const [status, setStatus] = useState(false);
  return <>

    <div class="body-right">

      {
        !status && (
          <div class="content_doc">
            <p class="pclass"><b>The Evaluation Process:</b></p><br /><br />
            <p class="pclass"><b>Ongoing
              System of Continuous & Comprehensive evaluation at the Primary Education
              Level: Further Development</b></p><br />
            <p class="pclass">With the introduction of the renewed curriculum in 1981 the system
              of Continuous and Comprehensive Evaluation (CCE) started
              being implemented at the primary education level in West
              Bengal. The renewed curriculum and syllabuses introduced
              from the academic session of 2004-05 also proposed to strictly
              adhere to the system but with certaint. refi ments. The Education Commission (Ashok Mitra Commission)<br />
              ... ap ointed by the Government of West Bengal in 1992 initially
              examined the status of implementation of the system and
              identified the weaknesses and suggested certain remedial
              measures. The West Bengal Board of Primary Education in
              its bid to make the system more realistic and more effective
              has been advocating the administration of the entire system
              in four distinct segments :<br />
              1. Instant tests / tests on sub-unit of a lesson <br />
              2. Unit Test<br />
              3. Periodic or Terminal Evaluation<br />
              4. Summative Evaluation<br />
              It is true that success of the administration of the system much lies
              with the teachers. In spite of best of the efforts it appears that, all
              the teachers are yet to be given necessary orientation in this respect
              in a continuous process.<br />
              5. External Evaluation and Diagnostic Achievement
              Test as Integral Parts of CCE:Application of the CCE at the micro level
              often fails to detect the intra-state regional or inter-district disparities
              in achievement levels of pupils as well as to identify the hard spots
              in curriculum. Basically with a view to removing these deficiencies and
              to make a mid course corrections, if necessary, the Board as has been
              mentioned earlier, introduced in 1999 an External Evaluation now being
              held externally every year during April-May for the students completing
              just two years of schooling (i.e., at the end of Class II). Tests on uniform
              items in the subjects like First Language (Bengali, Hindi, Urdu, Nepali,
              Telugu and Oriya), Second Language (English) and Arithmetic are administered
              throughout the State in three days. Spot evaluation is done just after
              the completion of the tests. Similarly a centrally administered Diagnostic
              Achievement Test is conducted by the Board every year starting from the
              year 2005 with the objective to identify the strengths and weakness, if
              any of the students at the end of class IV i.e., students just completing
              a cycle of four years of schooling. More details about the external evaluation
              have been given below.</p>
            <p className='more' onClick={() => setStatus(!status)}><b><u>{!status && 'more...'}</u></b></p>



          </div>
        )
      }

      {
        status && (<div class="content_doc">

          <p class="pclass"><b>The Grade System</b><br />
            The Yash Pal Committee appointed by the Govt. of India discouraged unheathy
            competitions among individuals. Obviously it referred to the system of
            awarding of marks to determine the position of an individual. The grading
            system that automatically follows from the CCE on the other hand was decided
            to be upheld. The West Bengal Board of Primary Education however, follows
            as shown in the renewed curriculum a 5-point scale indicating indirect
            grading system for the scholastice subjects. This is shown in the table
            below:</p><br />


          <table width="325" border="1" cellpadding="0" cellspacing="0">
            <tr>
              <td><p class="pclass">Marks Obtained</p></td>
              <td><p class="pclass">Grade</p></td>
              <td><p class="pclass">Significance</p></td>
            </tr>
            <tr>
              <td><p class="pclass">80-100</p></td>
              <td><p class="pclass">A</p></td>
              <td><p class="pclass">Very Good</p></td>
            </tr>
            <tr>
              <td><p class="pclass">65-79</p></td>
              <td><p class="pclass">B</p></td>
              <td><p class="pclass">Good</p></td>
            </tr>
            <tr>
              <td><p class="pclass">50-64</p></td>
              <td><p class="pclass">C</p></td>
              <td><p class="pclass">Satisfactory</p></td>
            </tr>
            <tr>
              <td><p class="pclass">35-49</p></td>
              <td><p class="pclass">D</p></td>
              <td><p class="pclass">Average</p></td>
            </tr>
            <tr>
              <td><p class="pclass">Below 35</p></td>
              <td><p class="pclass">E</p></td>
              <td><p class="pclass">Not Satisfactory</p></td>
            </tr>
          </table>
          <br />

          <p class="pclass">A model of Evaluation Sheet as introduced by the renewed curriculum is given
            in Appendix of the revised curriculum. This type of indirect grading system
            will discourage rewarding individual on the basis of the single indicator
            of highest aggregate or the highest percentage of marks among all. This
            may, it is true, help in preparing a merit list at the cost of disincentive
            to many of the students leading sometimes to the total frustration. The
            Board proposes that remedial teaching should be adopted as and when necessary.
            The child lagging behind should be made to reach at least B grade through
            remedial teaching.<br />
            In the co-scholastic subjects a 4-point scale with direct grading through
            average-standard may be followed as indicated below:</p><br />

          <table width="285" border="1" cellpadding="0" cellspacing="0">
            <tr>
              <td><p class="pclass">Grade-Value</p></td>
              <td><p class="pclass">Grade</p></td>
              <td><p class="pclass">Significance</p></td>
            </tr>
            <tr>
              <td><p class="pclass">4</p></td>
              <td><p class="pclass">A</p></td>
              <td><p class="pclass">Very Good</p></td>
            </tr>
            <tr>
              <td><p class="pclass">3</p></td>
              <td><p class="pclass">B</p></td>
              <td><p class="pclass">Good</p></td>
            </tr>
            <tr>
              <td><p class="pclass">2</p></td>
              <td><p class="pclass">C</p></td>
              <td><p class="pclass">Satisfactory</p></td>
            </tr>
            <tr>
              <td><p class="pclass">1</p></td>
              <td><p class="pclass">D</p></td>
              <td><p class="pclass">Not Satisfactory</p></td>
            </tr>
          </table>
          <br />
          <p class="pclass">The format for Evaluation Sheet has provision for comments from the evaluator/teacher
            such as "may be improved", "more efforts are necessary"
            etc. for encouraging the performer<br />
            The history of the development of the WBBPE since its inception makes it clear
            that the Board has never lagged behind in meeting what the society actually
            expects from it. It is not the renewed curriculum and syllabuses but the
            manner in which the tools for application of the CCE have been made pragmatic
            with required simplicity for recording the achievements deserve mention.</p>

        </div>


        )
      }

    </div>
  </>
}





export default Evaluation