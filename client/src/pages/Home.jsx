import Main from '../components/Layout/Main'
import PostCard from '../components/Ui/PostCard'
import Sidebar from '../components/Sidebar/Sidebar'
import AuthModel from '../components/Modal/AuthModel'
import ReportModal from '../components/Modal/ReportModal'

const Home = () => {

  return (
    <div>
       <Main>
        <div>
          {/* {showModal && <AuthModel onClose={() => setShowModal(false)} />} */}
          {/* <ReportModal /> */}
          <Sidebar />
        </div>

        <div className="p-10 px-20 overflow-y-auto">

          <PostCard 
            title="can i pause my degree"
            content="I’ve completed 1 year of BBA, but now I’m considering taking a gap year to prepare for the NEET entrance exam again. If I don’t crack the exam this year, I plan to continue my BBA degree, completing my 3rd year & writing supply for 2nd year ( 3rd & 4rth sem) is this possible?"
          />

             <PostCard 
            title="Why people are racist towards delhi people"
            content="So last month I visited haridwar and was at har ki pauri and there was a guy who was talking to me very nicely first but after that he asked me where r u from I told him I'm from Delhi and then after that his tone changed and he becomes rude for no reason and when I asked him where r u from he told me he is from Mumbai and after that he told me Delhi's people are very bad they're illiterate they don't know how to talk and how to drive a car and bla bla so I just stand up from there and go elsewhere"
          />

          <PostCard 
            title="Bata Bhai 😂"
            image="https://preview.redd.it/wzctfbed827f1.jpeg?width=320&crop=smart&auto=webp&s=6a2df69df933c589f7daf557a56cc1a8e5cc1d4f"
            content={"that he asked me where r u from I told him I'm from Delhi and then after that his tone changed and he becomes rude for no reason and when I asked him where r u from he told me he is from Mumbai and after that he told me Delhi's people are very bad they're illiterate they don't know how to talk and how to drive a car and bla bla so I just stand up from there and go elsewher"}
          />

          
             <PostCard 
            title="Caught my elder sister cheating"
            content="So last month I visited haridwar and was at har ki pauri and there was a guy who was talking to me very nicely first but after that he asked me where r u from I told him I'm from Delhi and then after that his tone changed and he becomes rude for no reason and when I asked him where r u from he told me he is from Mumbai and after that he told me Delhi's people are very bad they're illiterate they don't know how to talk and how to drive a car and bla bla so I just stand up from there and go elsewhere"
          />

        </div>

      </Main>
    </div>
  )
}

export default Home
