const validateObject = {
  firstName: {
    presence: {
      message: '^Please enter your first name.'
    },
    length: {
      minimum: 3,
      message: '^Your name must be at least 3 characters.'
    }
  },
  lastName: {
    presence: {
      message: '^Please enter your last name.'
    },
    length: {
      minimum: 3,
      message: '^Your last name must be at least 3 characters.'
    }
  },
  email: {
    presence: {
      message: '^Please enter your email.'
    },
    email: {
      message: '^Please enter a valid email.'
    }
  },
  password: {
    presence: {
      message: '^Please enter a password.'
    },
    length: {
      minimum: 4,
      message: '^Your password must be at least 4 characters.'
    }
  },
  bio: {
    length: {
      maximum: 40,
      message: '^Your password must be at less 40 characters.'
    }
  }
}

export default validateObject
