import { Box } from '@mui/material'
import React, { useState } from 'react'
import ChatBox from '../ChatBox/ChatBox'
import UserChat from './UserChat'
import SystemChat from './SystemChat'
import Upload from '../Upload/Upload'
import ReactMarkdown from 'react-markdown'

export default function ChatScreen2({ visible }: any) {
  const [progress, setProgress] = useState(0)
  const [userSysChats, setUserSysChats] = useState<string[]>([]) // We can save this list of dictionary where each dictonary containing two message ( user's and system's)
  const handleProgress = (num: number) => {
    setProgress(num)
    // console.log(progress)
  }

  const handleSend = () => {
    const message =
      'Can you summarize the partnership between openAi and Microsoft for me in 10 bullets points'
    setUserSysChats((chats: string[]) => [...chats, message])
  }

  return (
    <Box>
      <Box>
        <Box
          sx={{
            padding: 4,
            gap: '4px',
            height: '69vh',
            // border: '1px solid',
          }}
        >
          <Box sx={{ height: '45vh', overflow: 'scroll' }}>
            <Box>
              {userSysChats.map((data) => (
                <Box key={data}>
                  <UserChat>{data}</UserChat>

                  <SystemChat>
                    {/* Markdown-Support */}
                    <ReactMarkdown>
                      Certainly! Here's a summary of the partnership between
                      OpenAI and Microsoft in 10 bullet points:
                    </ReactMarkdown>
                    <ReactMarkdown>
                      * OpenAI and Microsoft announced a strategic partnership
                      in 2019.
                    </ReactMarkdown>
                    <ReactMarkdown>
                      * Microsoft invested $1 billion in OpenAI as part of the
                      collaboration.
                    </ReactMarkdown>
                    <ReactMarkdown>
                      * The partnership aims to accelerate the development and
                      availability of artificial general intelligence (AGI).
                    </ReactMarkdown>
                    <ReactMarkdown>
                      * OpenAI committed to using Microsoft Azure as its
                      preferred cloud platform for AGI development.
                    </ReactMarkdown>
                    <ReactMarkdown>
                      * Microsoft will become OpenAI's exclusive cloud provider,
                      supporting its AI workloads.
                    </ReactMarkdown>
                    <ReactMarkdown>
                      * The two companies collaborate on large-scale AI projects
                      and share research and development resources.
                    </ReactMarkdown>
                    <ReactMarkdown>
                      * OpenAI gains access to Microsoft's expertise in areas
                      like Azure's supercomputing capabilities.
                    </ReactMarkdown>
                    <ReactMarkdown>
                      * The collaboration helps OpenAI scale its AI models and
                      technologies for broader applications.
                    </ReactMarkdown>
                    <ReactMarkdown>
                      * OpenAI and Microsoft are committed to ensuring AGI is
                      developed and deployed safely and ethically.
                    </ReactMarkdown>
                    <ReactMarkdown>
                      * The partnership combines OpenAI's cutting-edge research
                      with Microsoft's technological infrastructure to advance
                      the field of AI.
                    </ReactMarkdown>
                  </SystemChat>
                </Box>
              ))}

              {/* <UserChat>
                Can you summarize the partnership between openAi and Microsoft
                for me in 10 bullets points
              </UserChat>
              <SystemChat>
                Certainly! Here's a summary of the partnership between OpenAI
                and Microsoft in 10 bullet points:
                <ul>
                  <li>
                    OpenAI and Microsoft announced a strategic partnership in
                    2019.
                  </li>
                  <li>
                    Microsoft invested $1 billion in OpenAI as part of the
                    collaboration.
                  </li>
                  <li>
                    The partnership aims to accelerate the development and
                    availability of artificial general intelligence (AGI).
                  </li>
                  <li>
                    OpenAI committed to using Microsoft Azure as its preferred
                    cloud platform for AGI development.
                  </li>
                  <li>
                    Microsoft will become OpenAI's exclusive cloud provider,
                    supporting its AI workloads.
                  </li>
                  <li>
                    The two companies collaborate on large-scale AI projects and
                    share research and development resources.
                  </li>
                  <li>
                    OpenAI gains access to Microsoft's expertise in areas like
                    Azure's supercomputing capabilities.
                  </li>
                  <li>
                    The collaboration helps OpenAI scale its AI models and
                    technologies for broader applications.
                  </li>
                  <li>
                    OpenAI and Microsoft are committed to ensuring AGI is
                    developed and deployed safely and ethically.
                  </li>
                  <li>
                    The partnership combines OpenAI's cutting-edge research with
                    Microsoft's technological infrastructure to advance the
                    field of AI.
                  </li>
                </ul>
              </SystemChat> */}
            </Box>
          </Box>
          <Box sx={{ mt: 1 }}>
            {/* <Box
              sx={{
                fontFamily: 'Arial',
                fontSize: '14px',
                fontWeight: 700,
                lineHeight: '22px',
                letterSpacing: '0px',
                textAlign: 'left',
                mb: '4px',
              }}
            >
              YOUR MESSAGE
            </Box> */}
            <Box sx={{ mb: 2 }}>
              <Upload handleProgress={handleProgress} />
            </Box>
            <ChatBox
              isPresent={true}
              progress={progress}
              handleSend={handleSend}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
