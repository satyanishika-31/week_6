# Deployment Notes

This app is a React frontend plus an Express/Mongoose backend.

## Required environment variables

Backend:
- `PORT` - server port, default `4000`
- `DB_URL` - hosted MongoDB connection string
- `SECRET_KEY` - application secret
- `FRONTEND_URL` or `FRONTEND_URLS` - allowed browser origin(s)

Frontend:
- `VITE_API_URL` - public backend base URL

## Local run

Backend:
```bash
cd backend
npm install
npm start
```

Frontend:
```bash
cd frontend
npm install
npm run dev
```

## Production checklist

1. Set `DB_URL` to a hosted MongoDB instance.
2. Set `FRONTEND_URL` or `FRONTEND_URLS` to the deployed frontend domain.
3. Set `VITE_API_URL` to the deployed backend domain.
4. Deploy the backend with the `start` script from `backend/package.json`.
5. Build the frontend with `npm run build` in `frontend`.
