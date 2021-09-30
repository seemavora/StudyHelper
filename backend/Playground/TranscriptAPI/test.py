from youtube_transcript_api import YouTubeTranscriptApi
#If a video's ID starts with a hyphone you will have to maks the hyphen using a \ to prevent the CLI from mistaking it for a argument name

outls = []
tx = YouTubeTranscriptApi.get_transcript('d1KcaycYsRs&ab', languages=['de','en'])
transcript_list = YouTubeTranscriptApi.list_transcripts('d1KcaycYsRs&ab')
print(transcript_list)
for i in tx:
    outtxt = (i['text'])
    outls.append(outtxt)
    with open ("op2.txt","a") as opf:
        opf.write(outtxt + "\n")