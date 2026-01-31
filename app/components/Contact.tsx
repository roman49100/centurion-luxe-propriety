import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '@/supabase/info';
import { Link } from 'react-router';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7acf8408/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.propertyAddress,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue lors de l\'envoi');
      }

      console.log('Contact request sent successfully:', data);
      
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyAddress: '',
          message: '',
        });
      }, 3000);
      
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Passons à l'<span className="text-emerald-500">action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Vous avez un bien à Paris, Nantes ou Angers ? Parlons chiffres. Vous saurez en 48h si votre bien est éligible et combien vous pouvez générer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
              <h3 className="text-2xl mb-6 text-gray-900">Informations de Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Email</div>
                    <a
                      href="mailto:centurion.luxe.propriety@gmail.com"
                      className="text-emerald-600 hover:underline"
                    >
                      centurion.luxe.propriety@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Numéro de Téléphone</div>
                    <a
                      href="tel:+33642967051"
                      className="text-emerald-600 hover:underline"
                    >
                      +33 6 42 96 70 51
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Nos Bureaux</div>
                    <div className="text-gray-600">
                      <div className="mb-2">
                        <strong>Paris</strong><br />
                        15ème arrondissement, Paris
                      </div>

                      <div className="mb-2">
                        <strong>Nantes</strong><br />
                        Centre-ville, Nantes
                      </div>

                      <div>
                        <strong>Angers</strong><br />
                        Centre-ville, Angers
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg mb-4 text-gray-900">Pourquoi Nous Contacter ?</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={20} />
                    Consultation initiale gratuite
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={20} />
                    Étude personnalisée sans engagement
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={20} />
                    Réponse rapide sous 24 heures
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={20} />
                    Recommandations de services personnalisées
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-emerald-600" size={40} />
                  </div>
                  <h3 className="text-2xl mb-4 text-gray-900">Merci !</h3>
                  <p className="text-gray-600">
                    Nous avons bien reçu votre message et vous répondrons dans les 24 heures.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="jean@exemple.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Numéro de Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="+33 1 23 45 67 89"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="propertyAddress"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Adresse de la Propriété *
                    </label>
                    <input
                      type="text"
                      id="propertyAddress"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="123 Rue Principale, Paris"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Parlez-nous de votre propriété et comment nous pouvons vous aider..."
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm mb-4">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-emerald-500 text-white py-4 rounded-xl hover:bg-emerald-600 transition-all text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi...' : 'Échanger sur votre bien'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="container mx-auto px-6 mt-24 pt-12 border-t border-gray-200"
      >
        <div className="text-center text-gray-600">
          <p className="mb-2">© 2026 Centurion Luxe Propriety. Tous droits réservés.</p>
          <p className="text-sm mb-3">
            Gestion immobilière professionnelle pour locations courte et moyenne durée
          </p>
          <p className="text-sm text-emerald-600 font-medium">
            Paris • Nantes • Angers
          </p>
          <Link 
            to="/login" 
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors block mt-4"
          >
            Administration
          </Link>
        </div>
      </motion.div>
    </section>
  );
}