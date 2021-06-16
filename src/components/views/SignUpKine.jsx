import axios from 'axios';
import React, { useState } from 'react';
import avatar from '../../media/avatar.png';
import './SignUp.css';

export default function SignUpKine() {
  const [formContent, setFormContent] = useState({});
  const [isKine, setIsKine] = useState(true);
  function handleCheck(event) {
    console.log(event.target.name, event.target.value);
    if (event.target.value === 'kineCheck') {
      setIsKine(true);
    } else {
      setIsKine(false);
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const content = {};
    for (let i = 0; i < event.target.length; i += 1) {
      content[event.target[i].name] = event.target[i].value;
    }
    console.log(formContent);
    setFormContent(content);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        formContent,
        setFormContent,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="container-form">
      <div>
        <div className="signUpForm">
          <div className="container-avatar">
            <img className="avatar" src={avatar} alt="avatar" />
          </div>
          <form onSubmit={handleSubmit}>
            <label className="field" htmlFor="lastname">
              <input
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Nom :"
                required
              />
            </label>
            <label className="field" htmlFor="firstname">
              <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="Prénom : "
                required
              />
            </label>
            <label className="field" htmlFor="birthdate">
              <input
                id="birthdate"
                type="date"
                name="birthdate"
                placeholder="Date de naissance :"
                required
              />
            </label>
            <label className="field" htmlFor="email">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="email :"
              />
            </label>
            <label className="field" htmlFor="confirmEmail">
              <input
                id="confirmEmail"
                type="email"
                name="confirmEmail"
                placeholder="confirm email :"
                required
              />
            </label>
          </form>
        </div>
        <div className="signUpForm">
          <form onSubmit={handleSubmit}>
            <label className="field" htmlFor="password">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Mot de passe :"
                required
              />
            </label>

            <label className="field" htmlFor="confirmPassword">
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirmer le mot de passe :"
                required
              />
            </label>
            <label className="field" htmlFor="RPPS">
              {isKine ? (
                <input
                  id="firstname"
                  type="number"
                  name="RPPS"
                  placeholder="RPPS : "
                  required
                />
              ) : (
                <input
                  id="firstname"
                  type="number"
                  name="RPPS"
                  placeholder="RPPS : "
                />
              )}
            </label>
            <div>
              <div>
                <label className="check" htmlFor="kineCheck">
                  <input
                    type="radio"
                    id="kineCheck"
                    name="check"
                    value="kineCheck"
                    checked={isKine}
                    onChange={handleCheck}
                  />
                  Je suis un.e kiné
                </label>
              </div>

              <div>
                <label className="check" htmlFor="companyCheck">
                  <input
                    type="radio"
                    id="companyCheck"
                    name="check"
                    value="companyCheck"
                    checked={!isKine}
                    onChange={handleCheck}
                  />
                  Je suis une entreprise
                </label>
              </div>
            </div>
            <label className="field" htmlFor="siret">
              {!isKine ? (
                <input
                  className="siret"
                  id="siret"
                  type="text"
                  name="siret"
                  placeholder="Siret :"
                  required
                />
              ) : (
                ''
              )}
            </label>

            <label className="field" htmlFor="country">
              <select id="country" name="country" required>
                <optgroup label="Europe">
                  <option value="france">France</option>
                  <option value="espagne">Espagne</option>
                  <option value="italie">Italie</option>
                  <option value="royaume-uni">Royaume-Uni</option>
                </optgroup>
                <optgroup label="Amérique">
                  <option value="canada">Canada</option>
                  <option value="etats-unis">Etats-Unis</option>
                </optgroup>
                <optgroup label="Asie">
                  <option value="chine">Chine</option>
                  <option value="japon">Japon</option>
                </optgroup>
              </select>
            </label>

            <label className="field" htmlFor="address">
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Adresse :"
              />
            </label>
            <label className="field" htmlFor="phone">
              <input
                id="phone"
                type="text"
                name="phone"
                placeholder="Téléphone :"
              />
            </label>
            <label className="field" htmlFor="website">
              <input
                id="website"
                type="text"
                name="website"
                placeholder="Site web :"
              />
            </label>
            <button className="button-signup" type="submit">
              Créer mon compte
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
