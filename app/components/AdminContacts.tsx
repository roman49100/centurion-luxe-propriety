import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Calendar, RefreshCw, AlertCircle, Send, X, CheckCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  createdAt: string;
}

export function AdminContacts() {
  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [replyTo, setReplyTo] = useState<ContactRequest | null>(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [replySending, setReplySending] = useState(false);
  const [replySuccess, setReplySuccess] = useState(false);
  const [replyError, setReplyError] = useState<string | null>(null);

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7acf8408/contacts`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors du chargement des contacts');
      }

      setContacts(data.contacts || []);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const handleReplyClick = (contact: ContactRequest) => {
    setReplyTo(contact);
    setReplyMessage(`Bonjour ${contact.name.split(' ')[0]},\n\nMerci pour votre demande concernant votre propriété située ${contact.address}.\n\n`);
    setReplySuccess(false);
    setReplyError(null);
  };

  const handleCloseReply = () => {
    setReplyTo(null);
    setReplyMessage('');
    setReplySuccess(false);
    setReplyError(null);
  };

  const handleSendReply = async () => {
    if (!replyTo || !replyMessage.trim()) return;

    setReplySending(true);
    setReplyError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7acf8408/admin/reply`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            to: replyTo.email,
            name: replyTo.name,
            message: replyMessage,
            originalMessage: replyTo.message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error('Server error details:', data);
        throw new Error(data.details || data.error || 'Erreur lors de l\'envoi de la réponse');
      }

      console.log('Reply sent successfully:', data);
      setReplySuccess(true);
      
      // Close modal after 2 seconds
      setTimeout(() => {
        handleCloseReply();
      }, 2000);

    } catch (err) {
      console.error('Error sending reply:', err);
      setReplyError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi');
    } finally {
      setReplySending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl text-gray-900">
            Demandes de <span className="text-emerald-500">Contact</span>
          </h1>
          <button
            onClick={fetchContacts}
            disabled={loading}
            className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition-all disabled:opacity-50"
          >
            <RefreshCw className={loading ? 'animate-spin' : ''} size={20} />
            Actualiser
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center gap-3 text-red-700">
            <AlertCircle size={20} />
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-gray-600">Chargement des demandes...</p>
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <Mail className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600 text-lg">Aucune demande de contact pour le moment</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
              <p className="text-emerald-800">
                <strong>{contacts.length}</strong> demande{contacts.length > 1 ? 's' : ''} de contact
              </p>
            </div>

            {contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl text-gray-900 mb-1">{contact.name}</h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} />
                      {formatDate(contact.createdAt)}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    #{contact.id}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Email</div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-emerald-600 hover:underline"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Phone className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Téléphone</div>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-emerald-600 hover:underline"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Adresse de la propriété</div>
                    <div className="text-gray-700">{contact.address}</div>
                  </div>
                </div>

                {contact.message && (
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-4">
                    <div className="text-xs text-gray-500 mb-2">Message</div>
                    <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                  </div>
                )}

                <button
                  onClick={() => handleReplyClick(contact)}
                  className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition-all mt-4"
                >
                  <Mail size={20} />
                  Répondre
                </button>
              </motion.div>
            ))}
          </div>
        )}

        <AnimatePresence>
          {replyTo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
              onClick={handleCloseReply}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl my-8 max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl text-gray-900">Répondre à {replyTo.name}</h2>
                  <button
                    onClick={handleCloseReply}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Email</div>
                      <a
                        href={`mailto:${replyTo.email}`}
                        className="text-emerald-600 hover:underline"
                      >
                        {replyTo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Phone className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Téléphone</div>
                      <a
                        href={`tel:${replyTo.phone}`}
                        className="text-emerald-600 hover:underline"
                      >
                        {replyTo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Adresse de la propriété</div>
                    <div className="text-gray-700">{replyTo.address}</div>
                  </div>
                </div>

                {replyTo.message && (
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-4">
                    <div className="text-xs text-gray-500 mb-2">Message original</div>
                    <p className="text-gray-700 whitespace-pre-wrap">{replyTo.message}</p>
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-sm mb-2 text-gray-700 font-medium">
                    Votre réponse *
                  </label>
                  <textarea
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    className="w-full h-48 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tapez votre réponse ici..."
                  />
                </div>

                {replyError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4 flex items-center gap-3 text-red-700">
                    <AlertCircle size={20} />
                    {replyError}
                  </div>
                )}

                {replySuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4 flex items-center gap-3 text-green-700">
                    <CheckCircle size={20} />
                    Réponse envoyée avec succès
                  </div>
                )}

                <button
                  onClick={handleSendReply}
                  disabled={replySending}
                  className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition-all disabled:opacity-50"
                >
                  {replySending ? (
                    <RefreshCw className="animate-spin" size={20} />
                  ) : (
                    <Send size={20} />
                  )}
                  Envoyer
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}