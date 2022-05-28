import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import User from '../models/User.js'

GoogleStrategy.Strategy

const GOOGLE_CLIENT_ID="1029157382747-pbh0pgissgcitnu2eslf1prcit53nrgu.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"
const pass = passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, done) {
      const newUser={
        id:profile.id,
        name:profile.displayName,
        email:profile.emails[0].value
      }
      console.log(profile)
      try {
        let oldUser =await User.findOne({id:profile.id})
        if(oldUser){
          done(null,oldUser)
        }else{
           oldUser=await User.create(newUser)
           done(null,oldUser)
        }
        
      } catch (error) {
        console.log(error)
        
      }
  }
));


passport.serializeUser((user,done)=>{
  done(null,user)
})

passport.deserializeUser((user,done)=>{
  done(null,user)
})

export default pass