import { Box } from '@mui/material'
import React from 'react'
import ChatBox from '../ChatBox/ChatBox'
import UserChat from './UserChat'
import SystemChat from './SystemChat'
import ReactMarkdown from 'react-markdown'

export default function ChatScreen({ visible }: any) {
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
          <Box sx={{ height: '58vh', overflow: 'scroll' }}>
            <Box>
              <UserChat>
                Can you summarize the partnership between openAi and Microsoft
                for me in 10 bullets points
              </UserChat>

              <SystemChat>
                <ReactMarkdown>
                  Certainly! Here's a summary of the partnership between OpenAI
                  and Microsoft in 10 bullet points:
                </ReactMarkdown>

                <ReactMarkdown>
                  * OpenAI and Microsoft announced a strategic partnership in
                  2019.
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
                  * OpenAI committed to using Microsoft Azure as its preferred
                  cloud platform for AGI development.
                </ReactMarkdown>
                <ReactMarkdown>
                  * Microsoft will become OpenAI's exclusive cloud provider,
                  supporting its AI workloads.
                </ReactMarkdown>
                <ReactMarkdown>
                  * The two companies collaborate on large-scale AI projects and
                  share research and development resources.
                </ReactMarkdown>
                <ReactMarkdown>
                  * OpenAI gains access to Microsoft's expertise in areas like
                  Azure's supercomputing capabilities.
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
                  * The partnership combines OpenAI's cutting-edge research with
                  Microsoft's technological infrastructure to advance the field
                  of AI.
                </ReactMarkdown>
              </SystemChat>
            </Box>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Box
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
            </Box>
            <ChatBox isPresent={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
