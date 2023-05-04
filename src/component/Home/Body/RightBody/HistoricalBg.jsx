import React, { useState } from 'react'
import "./HistoricalBg.css"
const HistoricalBg = () => {

  const [status,setStatus]=useState(false);
  return <>
    <div class="body-right">

      <div class="content_doc">
        <p class="pclass"><b>Historical
          Background</b></p><br />
        <p class="pclass"><b>"A" </b>state level Primary School Education Board for which provision already
          existed in the Primary Education Act of 1973, has been established. The
          Board is supposed to exercise jurisdictional authority on the District
          Primary School Councils, The objective is as much to decentralise as to
          democratise the primary education system.&quot; (Ashok Mitra Commission
          1992, Page 39)</p><br />
        <p class="pclass">Though
          the West Bengal Primary Education Act, 1973 West Bengal Act XI, III of
          1973 as referred to above by the Commission was passed in the West Bengal
          Legislative Assembly as early as on the 20th September, 1974, the West
          Bengal Board of Primary Education could be established</p><br />
        <p class="pclass">as
          provided in the Act only in 1990. It actually started functioning on and
          from the 2nd July, 1990. Several inhibiting factors were instrumental
          for the late implementation of the Act. The Left Front Government with
          the assumption of its office took up with the Act and made extensive but
          necessary changes in it. But it took a long time for getting assent of
          the Hon'ble Governor. Hon'ble Governor, as a matter of fact, sent it to
          His Excellency the President of India and the assent of the President
          reached after long lapse of several years. But court case again acted
          as a stumbling block. Some teachers of the then North 24 Parganas district
          filed a case against the said Act. The formation of the Board as well
          as the District Primary School Councils as per the revised act was further
          delayed. At last on 2nd July 1990 the West Bengal Board of Primary Education
          could be established with Prof. Partha De, Ex-Minister, School Education
          as its President and Shri Amal Das, the then Additional Joint Director,
          Directorate of School Education as its Part-time Secretary. With the establishment
          of this Board, unique in the whole country in respect of supervision,
          development, management and control of Primary Education in the State,
          four segments of education in the State came under four such autonomous
          Boards, viz.</p><br />
        <p class="pclass">* West Bengal Board of Primary Education</p><br />
        <p class="pclass">* West Bengal Board of Secondary Education</p><br />
        <p class="pclass">* West Bengal Board of Madrasah Education</p><br />
        <p class="pclass">* West Bengal Council of Higher Secondary Education</p><br />
        <p class="pclass">It
          is worthwhile to mention in this connection that the Ashok Mitra Commission
          set up in August 1991, immediately after the Board was established in
          July 1990, suggested not only the exercise of jurisdictional authority
          of the Board over the District Primary School Councils but also indicated
          its responsibility to induce the District Councils to coordinate effectively
          with the district inspectorates of schools and the Panchayet Samitis.
          (Ashok Mitra Commission, Page 42)</p><br />

        <p class="pclass"><b>Introduction
          of a Modern and Scientific Curriculum and Syllabuses:</b><br />After independence curriculum and syllabuses based mostly on the Gandhian
          Philosophy of basic education were introduced as early as in 1950. After
          a lapse of some 31 years a new curriculum and syllabi subject-wise were
          introduced from 1981. Based on the recommendations of Prof. Himanshu Bimal
          Majumdar Committee 1978 this curriculum claims an innovative approach
          on counts more than one. In its bid to seek a total development of child,
          it kept in mind all the requirements for reaching this goal. With a view
          to making education life skill oriented and to making it realistic and
          practical, Co-scholastic subjects such as (a) Direct Experience-based
          works, (b) Creative and Productive works had been included as the basis
          of the curriculum. Emphasis was laid on Games, Sports and Physical Education,
          formation of scientific attitude and promotion of inquisitiveness and
          power of observation. The system of Continuous & Comprehensive Evaluation
          along with the policy of No-Detention upto class IV was introducedmaking
          it realistic and practical, the Directorate of School Education then took
          the initiative to develop the instructional materials such as text-books
          and some Guide-books. The SCERT, West Bengal since its inception in eighties
          took up the initiative to prepare the text-books and the Guide-books.
          Subject-wise Committees as recommended by the Himanshu Bimal Majumdar
          Committee were formed for the purpose and the SCERT developed the manuscripts
          of text books and subsequently some guide books in early eighties. The
          manuscripts were then handed over to the Department of School Education
          for publication and distribution. With the introduction of the Continuous
          and Comprehensive Evaluation (CCE) and the Policy of No Detention as per
          the new Curriculum it became an imperative on the part of the Government
          to impart training in all these respects to all the educational functionaries
          both at the State and District levels and then to the Primary teachers
          as well. It was the SCERT that took the initiative to impart necessary
          orientation in all these respects. A three-tier and time bound Orientation
          Programme could however, be undertaken in 1994 - 1995 after the Primary
          Board was set up in 1990.</p>
        <div class="hisimg"><img src="images/careers2.jpg" width="105" height="88"/></div>
        <p class="pclass">The
          West Bengal Board of Primary Education since its establishment in 1990
          undertook all these activities and by 19931994 Guide-books in different
          subject areas were developed through different workshops involving experts
          & teachers along the line followed by the SCERT.<br />The Guide books developed by the Board were done keeping conformity to
          the national level approaches.</p><br />
        <p class="pclass">The
          teething troubles both in respect of manpower shortage and fund crunch
          of the Board were tremendous and it was Prof. Partha De, the first President
          of the Board who left no stone unterned to tackle the problems. The table
          below shows the subsequent Presidents and Secretaries of the Board.</p><br /><br />
        <p className='more' onClick={()=>setStatus(!status)}><b><u>{!status&&'more...'}</u></b></p>

        { status&&(
           <div class="content_doc">

           <p class="pclass"><b>PRESIDENTS 
           SINCE - 1990</b></p><br />
       <table>
       <tr bgcolor="#990000">
       <td width="170" align="center" valign="top"><p class="table_font">Name</p></td>
       <td width="88" align="center" valign="top"><p class="table_font">From</p></td>
       <td width="126" align="center" valign="top"><p class="table_font">To</p></td>
       </tr>
   
       <tr bordercolor="#FFFFFF" bgcolor="#CCCCCC">
       <td align="center" valign="top"><p class="table_cont">Prof.Partha De</p></td>
       <td align="center" valign="top"><p class="table_cont">02.09.1990</p></td>
       <td align="center" valign="top"><p class="table_cont">12.04.1991</p></td>
       </tr>
   
       <tr bordercolor="#FFFFFF" bgcolor="#CCCCCC"/>
       <td align="center" valign="top"><p class="table_cont">Prof.Bhabes Moitra</p></td>
       <td align="center" valign="top"><p class="table_cont">01.10.1991</p></td>
       <td align="center" valign="top"><p class="table_cont">30.06.2000</p></td>
   
       <tr bordercolor="#FFFFFF" bgcolor="#CCCCCC">
       <td align="center" valign="top"><p class="table_cont">Dr.Jyoti Prakas Ghosh</p></td>
       <td align="center" valign="top"><p class="table_cont">01.07.2000</p></td>
       <td align="center" valign="top"><p class="table_cont">17.11.2004</p></td>
       </tr>
   
       <tr bordercolor="#FFFFFF" bgcolor="#CCCCCC">
       <td align="center" valign="top"><p class="table_cont">Dr.Sulapani Bhattacharya</p></td>
       <td align="center" valign="top"><p class="table_cont">21.12.2004</p></td>
       <td align="center" valign="top"><p class="table_cont">Continuing</p></td>
       </tr>
       </table>
       <br />
           
        <p class="pclass"><b>SECRETARIES</b></p><br />
        <table>
        <tr bgcolor="#990000">
           <td width="170" align="center" valign="top"><p class="table_font">Name</p></td>
           <td width="88" align="center" valign="top"><p class="table_font">From</p></td>
           <td width="126" align="center" valign="top"><p class="table_font">To</p></td>
       </tr>
       <tr bordercolor="#FFFFFF" bgcolor="#CCCCCC">
       <td align="center" valign="top"><p class="table_cont">Dr.A. K. Das</p></td>
       <td align="center" valign="top"><p class="table_cont">02.07.1990</p></td>
       <td align="center" valign="top"><p class="table_cont">01.06.1992</p></td>
       </tr>
   
       <tr bordercolor="#FFFFFF" bgcolor="#CCCCCC">
       <td align="center" valign="top"><p class="table_cont">Prof.Nripati Chowdhury</p></td>
       <td align="center" valign="top"><p class="table_cont">01.06.1992</p></td>
       <td align="center" valign="top"><p class="table_cont">31.05.1993</p></td>
       </tr>
   
       <tr bordercolor="#FFFFFF" bgcolor="#CCCCCC">
       <td align="center" valign="top"><p class="table_cont">Shri Tapas Thakur</p></td>
       <td align="center" valign="top"><p class="table_cont">31.05.1993</p></td>
       <td align="center" valign="top"><p class="table_cont">31.05.1994</p></td>
       </tr>
   
       <tr bordercolor="#FFFFFF" bgcolor="#CCCCCC">
       <td align="center" valign="top"><p class="table_cont">Shri Subodh Chandra Bhakta</p></td>
       <td align="center" valign="top"><p class="table_cont">01.06.1994</p></td>
       <td align="center" valign="top"><p class="table_cont">21.04.1998</p></td>
       </tr>
   
       <tr bordercolor="#FFFFFF" bgcolor="#CCCCCC">
       <td align="center" valign="top"><p class="table_cont">Smt.Tarulata Sen</p></td>
       <td align="center" valign="top"><p class="table_cont">22.04.1998</p></td>
       <td align="center" valign="top"><p class="table_cont">20.05.1998</p></td>
       </tr>
   
       <tr bordercolor="#FFFFFF" bgcolor="#CCCCCC">
       <td align="center" valign="top"><p class="table_cont">Shri Biman Kumar Mukhopadhyay</p></td>
       <td align="center" valign="top"><p class="table_cont">21.05.1998</p></td>
       <td align="center" valign="top"><p class="table_cont">06.12.1998</p></td>
       </tr>
   
       <tr bordercolor="#FFFFFF" bgcolor="#CCCCCC">
       <td align="center" valign="top"><p class="table_cont">Prof.Ujjwal Kumar Basu</p></td>
       <td align="center" valign="top"><p class="table_cont">07.12.1998</p></td>
       <td align="center" valign="top"><p class="table_cont">05.02.2001</p></td>
       </tr>
   
       <tr bordercolor="#FFFFFF" bgcolor="#CCCCCC">
       <td align="center" valign="top"><p class="table_cont">Prof.Swapan Kumar Sarkar</p></td>
       <td align="center" valign="top"><p class="table_cont">01.03.2001</p></td>
       <td align="center" valign="top"><p class="table_cont">04.08.2005</p></td>
       </tr>
   
       <tr bordercolor="#FFFFFF" bgcolor="#CCCCCC">
       <td align="center" valign="top"><p class="table_cont">Prof.Debarshi Mandal</p></td>
       <td align="center" valign="top"><p class="table_cont">08.08.2005</p></td>
       <td align="center" valign="top"><p class="table_cont">Continuing</p></td>
       </tr>
   
        </table>
       
       </div>
        )}


      </div>

    </div>
  </>
}

export default HistoricalBg