import openai
#Dev| Xruzen ill be customizing this soon for future projects :>
openai.api_key = 'Put your own API here'

def chatbot_response(prompt):
    try:
        response = openai.Completion.create(
            engine="text-davinci-003", #this is model gpt3
            prompt=prompt, 
            max_tokens=150,
            temperature=0.7,
            n=1,
            stop=None
        )
        return response.choices[0].text.strip()
    except Exception as e:
        return f"Error: {str(e)}"

def run_chatbot():
    print("Welcome to the MikroTik Wi-Fi Vendo Chatbot. Type 'exit' to stop.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == "exit":
            print("Chatbot: Goodbye!")
            break
        response = chatbot_response(user_input)
        print("Chatbot:", response)

if __name__ == "__main__":
    run_chatbot()
