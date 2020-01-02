import User from './Models/User'

export const resolvers = {
    Query:{
        message:()=>"hello graphql",
        saludo(root,args){
            console.log(args)
            return "saludos amigo"
        },
        async Users(){
            return await User.find()
        }
    },
    Mutation:{
        async createUser(_,{input}){
            const newUser = new User(input)
            await newUser.save()
            return newUser
        },
        async deleteUser(_,{_id}){
            return await User.findByIdAndDelete(_id)
        },
        async updateUser(_,{_id,input}){
            return await User.findByIdAndUpdate(_id,input,{new:true})
        }
    }
}