import { useState } from 'react';
import { ArrowRight, Fingerprint } from 'lucide-react';
import { motion } from 'motion/react';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password, rememberMe });
    // Handle login logic here
  };

  return (
    <div className="w-full max-w-md">
      {/* Version */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 text-emerald-400 mb-8">
          <Fingerprint size={20} />
          <span className="text-sm">v2.0.1</span>
        </div>
        <h2 className="text-white mb-2">Bienvenue</h2>
        <p className="text-zinc-400">Connectez-vous pour continuer</p>
      </motion.div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <label htmlFor="username" className="block mb-3 text-zinc-300 text-sm uppercase tracking-wide">
            Identifiant
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="utilisateur@delibarri.com"
            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-emerald-500 transition-colors duration-300 outline-none"
          />
        </motion.div>

        {/* Password field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <label htmlFor="password" className="block mb-3 text-zinc-300 text-sm uppercase tracking-wide">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-emerald-500 transition-colors duration-300 outline-none"
          />
        </motion.div>

        {/* Remember me & Forgot password */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex items-center justify-between pt-2"
        >
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer"
            />
            <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
              Se souvenir de moi
            </span>
          </label>
          <a
            href="#"
            className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            Mot de passe oublié ?
          </a>
        </motion.div>

        {/* Submit button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          type="submit"
          className="w-full mt-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          <span>Se connecter</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </form>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="mt-8 pt-8 border-t border-zinc-800 text-center"
      >
        <p className="text-sm text-zinc-500">
          Besoin d'aide ?{' '}
          <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Contactez le support
          </a>
        </p>
      </motion.div>
    </div>
  );
}