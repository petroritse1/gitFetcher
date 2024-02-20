import { useState,useEffect } from 'react'
import Repo from '../component/Repo'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from '../component/Header';
 
import Loader from '../component/Loader';
import Profile from '../component/Profile';
import Form from '../component/Form';
import AllRepo from '../component/AllRepo';
import SingleRepo from '../component/SingleRepo';
import Dashboard from '../component/Dashboard';
import ErrorPage from '../component/ErrorPage';
import TestError from '../component/TestError';
import Main from '../component/Main';
import Footer from '../component/Footer';
import { ToastContainer, toast } from 'react-toastify';
 
function App() {
   
  const [isLoading,setIsLoading] = useState(false);
  const [userData,setUserData] = useState(null);
  const [repoData,setRepoData] = useState(null);
  const [allRepoData,setAllRepoData] = useState(null);
  const [perPage,setPerPage] =useState(1)
  const [value,setValue] = useState('')
  const [error,setIsError] = useState("")
  const [selectedName,setSelectedName] = useState(null)
  const [username,setUsername] = useState("petroritse1")
   

  useEffect(function () { 
    if(!username) return
    if(!selectedName) return;
     async function fetchSingleRepo(){
     setIsLoading(true);
      try{
        const res = await fetch(`https://api.github.com/repos/${username}/${selectedName}`)
        if(!res.ok){
          throw new Error("failed to get user")
        }
        const data = await res.json();
       
        setRepoData(data)
      }
      catch(err){
        if (err.name !== 'AbortError')setIsError(err.message)

      }
      finally{
        setIsLoading(false)
      }
        }fetchSingleRepo()},[selectedName,username])

  useEffect(function(){
    if(!username) return
    async function fetchUserData(){
      setIsLoading(true);
       try{
         const res = await fetch(`https://api.github.com/users/${username}`)
         console.log(res)
         if(!res.ok){
            
           throw new Error("failed to get user")

          }
         
         const data = await res.json();
        
         setUserData(data)
       }
       catch(err){
         setIsError(err.message)
         toast.error("User not found!")
          
 
       }
       finally{
         setIsLoading(false)
       }
         }fetchUserData()},[username])

  useEffect(function(){
    if(!username) return
    async function fetchReposData(){
      setIsLoading(true);
       try{
         const res = await fetch(`https://api.github.com/users/${username}/repos?page=${perPage}&per_page=4`)
          if(!res.ok){
                   throw new Error("failed to get user")
                 }
         const data = await res.json();
        
         setAllRepoData(data)
       }
       catch(err){
        if (err.name !== 'AbortError')setIsError(err.message)

      }
       finally{
         setIsLoading(false)
       }
         }fetchReposData()},[perPage,username])
  

  function prev(){
       setPerPage(perPage - 1)

      }    
  function next(){
 
    setPerPage(perPage + 1)
   

  }    

  return (
    <>
    <ToastContainer position='top-center' />
    <BrowserRouter>
        <Routes>
            <Route path="/" index element={
              <Main>
                {isLoading && <Loader/>}
            <Header><Form value={value} setValue={setValue} onUsername={setUsername} isLoading={isLoading} /></Header>
            <Dashboard userData={userData} isLoading={isLoading}/>
              </Main>
            } />
           
          <Route path="repo" element={<Repo value={value} setValue={setValue} onUsername={setUsername}><Profile userData={userData}/> 
           </Repo>}>
                    <Route path='page'  element={
                    <Main>

                    <SingleRepo repoData={repoData} userData={userData} selectedName={selectedName} isLoading={isLoading}/>
                    </Main>
                    }/>
                    <Route path='all'  element={<Main>
                      <AllRepo   allRepoData={allRepoData} onSelectedName={setSelectedName}  onNext={next} onPrev={prev} perPage={perPage} isLoading={isLoading}/>
                      </Main>
                       }
                       />
                    <Route path="error" element={<TestError/>} />
                  
          </Route>
          <Route path="*" element={<ErrorPage isLoading={isLoading}/>}/>
  </Routes>
 
  </BrowserRouter>
  {/* <Footer/> */}
    </>
  )
}

export default App
